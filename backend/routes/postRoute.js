import express from 'express'
import { Content } from '../models/postContent.js'

const router = express.Router()

// post
router.post('/', async (req, res) => {
  try {
    if (!req.body.content) {
      return res.status(400).send({
        message: 'Field required'
      })
    }
    const newPost = {
      content: req.body.content
    }

    const post = await Content.create(newPost)

    return res.status(200).send(post)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

// get all posts
router.get('/', async (_, res) => {
  try {
    const posts = await Content.find().sort({ createdAt: -1 })

    return res.status(200).json({
      count: posts.length,
      data: posts
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

// get post by id
router.get('/:id', async (req, res) => {
  try {
    const post = await Content.findById(req.params.id)

    return res.status(200).send(post)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router
