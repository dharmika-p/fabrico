const userModel = require('../models/userModel');

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    const itemId = req.body.itemId;

    if (!itemId) return res.status(400).json({ message: "itemId is required" });

    // Update cart data
    if (!user.cartData[itemId]) {
      user.cartData[itemId] = 1;
    } else {
      user.cartData[itemId] += 1;
    }

    user.markModified("cartData"); // ✅ ensure Mongoose tracks the nested object
    await user.save();

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET CART
const getCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    res.status(200).json({ cartData: user.cartData || {} });
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    const itemId = req.query.itemId;

    if (!itemId) return res.status(400).json({ message: "itemId is required" });

    if (user.cartData[itemId]) {
      user.cartData[itemId] -= 1;

      if (user.cartData[itemId] <= 0) {
        delete user.cartData[itemId]; // 🧹 Clean up empty items
      }

      user.markModified("cartData");
      await user.save();
    }

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addToCart, getCart, removeFromCart };
