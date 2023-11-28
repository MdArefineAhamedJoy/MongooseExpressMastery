import { Request, Response } from 'express'
import { usersServices } from './users.server'
import UserValidationSchema from './user.validation'

const createUsers = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const validationData = UserValidationSchema.parse(userData)
    const result = await usersServices.createUsersIntoDB(validationData)
    res.status(200).json({
      success: true,
      message: 'create student secefuly',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await usersServices.getAllUsersIntoDB()
    res.status(200).json({
      success: true,
      message: 'get all user successfuly ',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId
    const result = await usersServices.getSingleUserIntoDB(id)

    res.status(200).json({
      success: true,
      message: 'get single user successfuly ',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId
    const body = req.body
    const result = await usersServices.updateSingleUserIntoDB(id, body)
    res.status(200).json({
      success: true,
      message: 'get single user successfuly ',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const updateOderDataSinglUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId
    const body = req.body
    const result = await usersServices.updateSingleUserIntoDB(id, body)
    res.status(200).json({
      success: true,
      message: 'get single user successfuly ',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const createControlar = {
  createUsers,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
}
