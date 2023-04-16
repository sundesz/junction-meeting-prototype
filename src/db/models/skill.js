import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SkillSet',
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  },
  rating: {
    type: Number,
    required: true,
  },
})

skillSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =
      typeof returnedObject === undefined
        ? returnedObject._id.toString()
        : returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Skill', skillSchema)
