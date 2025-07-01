const clothModel = require('../models/clothModel')
const fsPromises = require('fs').promises
const path = require('path')

const addCloth = async(req,res)=>{
    console.log(" req.body:", req.body);
    console.log(" req.file:", req.file);
 
    try {
        await clothModel.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category, // <-- this is coming undefined
            image: req.file.filename,
        });
        res.status(201).json({"message":"Cloth item added Successfully"});
    } catch (error) {
        console.log(" Mongoose Error:", error);
        res.status(500).json({"message": "Error adding cloth item"});
    }
 }
 
const listCloth = async(req,res)=>{
    try {
        const cloths = await clothModel.find({})
        res.json({data:cloths})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error listing cloth item"})
    }
}

const removeCloth = async(req,res)=>{
    try {
        const {id} = req.query
        console.log(id);
        const cloth = await clothModel.findById(id)
        if(!cloth)
            return res.status(404).json({"message":"Cloth not found"})
        
        await fsPromises.unlink(path.join(__dirname,'..','uploads',`${cloth.image}`))
        await clothModel.deleteOne({_id:id})
        res.status(200).json({"message":"Cloth item deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error removing cloth item"})
    }
 }
 
module.exports = {addCloth,listCloth,removeCloth}

