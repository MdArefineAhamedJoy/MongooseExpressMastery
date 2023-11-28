import express from 'express'
import { createControlar } from './users.controler'

const usersRouter = express.Router()

usersRouter.post('/users', createControlar.createUsers)

usersRouter.get('/users', createControlar.getAllUsers)

usersRouter.get('/users/:userId', createControlar.getSingleUser)

usersRouter.put('/users/:userId', createControlar.updateSingleUser)

export const router = usersRouter
