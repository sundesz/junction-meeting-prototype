import Team from '../../db/models/team.js'
// Import these other wise it will throw an error
// https://stackoverflow.com/questions/26818071/mongoose-schema-hasnt-been-registered-for-model
import Role from '../../db/models/role.js'
import Skill from '../../db/models/skill.js'
import SkillSet from '../../db/models/skillSet.js'

const teamRelatedPopulate = [
  {
    path: 'members',
    select: 'name email',
    // populate: {
    //   path: 'skills',
    //   select: 'skill rating',
    //   populate: { path: 'skill', strictPopulate: false },
    // },
  },
  'roles',
]

/**
 * Lists all teams
 */
const getAllTeams = async (req, res, next) => {
  try {
    const teams = await Team.find().populate(teamRelatedPopulate)

    res.json(teams)
  } catch (error) {
    next(error)
  }
}

/**
 * Get a team by Id
 */
const getTeam = async (req, res, next) => {
  try {
    const teamId = req.params.id
    const team = await Team.findById(teamId).populate(teamRelatedPopulate)
    res.json(team)
  } catch (error) {
    next(error)
  }
}

export default { getAllTeams, getTeam }
