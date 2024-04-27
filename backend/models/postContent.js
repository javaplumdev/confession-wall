import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Content = mongoose.model('Book', postSchema)
