import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
})

applicationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =
      typeof returnedObject === undefined
        ? returnedObject._id.toString()
        : returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Application', applicationSchema)
