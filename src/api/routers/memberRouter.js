import { Router } from 'express'
import memberController from '../controllers/memberController.js'

const router = Router()

router.get('/', memberController.getAllMembers)
router.get('/:id', memberController.getMember)

export default router
