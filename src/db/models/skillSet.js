import mongoose from 'mongoose'

const skillSetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

skillSetSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =
      typeof returnedObject === undefined
        ? returnedObject._id.toString()
        : returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('SkillSet', skillSetSchema)
