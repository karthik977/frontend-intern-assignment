const express = require("express")
const User = require("../models/User")
const protect = require("../middlewares/auth.middleware")

const router = express.Router()

// GET PROFILE
router.get("/me", protect, async (req, res) => {
  const user = await User.findById(req.user).select("-password")
  res.json(user)
})

// UPDATE PROFILE
router.put("/me", protect, async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user,
    req.body,
    { new: true }
  ).select("-password")

  res.json(updatedUser)
})

module.exports = router
