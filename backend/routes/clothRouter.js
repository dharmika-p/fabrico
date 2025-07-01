const express = require('express')
const clothRouter = express.Router()
const {addCloth, listCloth, removeCloth} = require('../controllers/clothController')
const multer = require('multer')

//image storage engine
const storage = multer.diskStorage({
   destination:"uploads",
   filename:(req,file,cb)=>{
       return cb(null,`${Date.now()}${file.originalname}`)
   }
})

const upload = multer({storage})

clothRouter.post('/add',upload.single("image"),addCloth)
clothRouter.get('/list',listCloth)
clothRouter.delete('/remove',removeCloth)

module.exports = clothRouter