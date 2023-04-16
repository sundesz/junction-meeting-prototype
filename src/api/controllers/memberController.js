import Member from '../../db/models/member.js'
import Role from '../../db/models/role.js'
import Skill from '../../db/models/skill.js'
import SkillSet from '../../db/models/skillSet.js'

const skillPopulate = {
  path: 'skills',
  select: 'skill rating',
  populate: { path: 'skill' },
}

/**
 * List all members
 */
const getAllMembers = async (req, res, next) => {
  try {
    const members = await Member.find({}, { name: 1, email: 1 })

    res.json(members)
  } catch (error) {
    next(error)
  }
}

/**
 * Get member by member id
 */
const getMember = async (req, res, next) => {
  try {
    const memberId = req.params.id
    const member = await Member.findById(memberId).populate(skillPopulate)
    res.json(member)
  } catch (error) {
    next(error)
  }
}

export default { getAllMembers, getMember }
