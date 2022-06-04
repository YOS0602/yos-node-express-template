import express from 'express'
import { postContract } from '../controllers/contract.controller'

const router = express.Router()

// router.get('/users', getUser)
router.post('/contract', postContract)

export { router }
