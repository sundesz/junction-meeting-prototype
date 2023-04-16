import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hashtag: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectIdea: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],
})

teamSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =
      typeof returnedObject === undefined
        ? returnedObject._id.toString()
        : returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Team', teamSchema)
