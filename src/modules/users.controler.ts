import { Request, Response } from 'express'
import { usersServices } from './users.server'

const createUsers = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await usersServices.createUsersIntoDB(userData)
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
    const result = await usersServices.updateSingleUserIntoDB(id)
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
