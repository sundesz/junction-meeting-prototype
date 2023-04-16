import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

roleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =
      typeof returnedObject === undefined
        ? returnedObject._id.toString()
        : returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Role', roleSchema)
