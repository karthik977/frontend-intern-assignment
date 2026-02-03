const express = require('express')
const Task = require('../models/Task')
const protect = require('../middlewares/auth.middleware')

const router = express.Router()

// CREATE TASK
router.post('/', protect, async (req, res) => {
  const { title, description } = req.body

  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' })
  }

  const task = await Task.create({
    title,
    description,
    user: req.user
  })

  res.status(201).json(task)
})

// GET ALL TASKS
router.get('/', protect, async (req, res) => {
  const tasks = await Task.find({ user: req.user })
  res.json(tasks)
})

// UPDATE TASK
router.put('/:id', protect, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.json(task)
})

// DELETE TASK
router.delete('/:id', protect, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)
  res.json({ success: true, message: 'Task deleted' })
})

module.exports = router
