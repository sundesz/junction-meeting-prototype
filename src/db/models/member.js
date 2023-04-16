import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
    },
  ],
})

memberSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =
      typeof returnedObject === undefined
        ? returnedObject._id.toString()
        : returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Member', memberSchema)
