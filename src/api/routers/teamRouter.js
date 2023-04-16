import { Router } from 'express'
import teamController from '../controllers/teamController.js'

const teamRouter = Router()

teamRouter.get('/', teamController.getAllTeams)
teamRouter.get('/:id', teamController.getTeam)

export default teamRouter
