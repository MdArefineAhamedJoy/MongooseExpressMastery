import { Tusers } from './users.interface'
import { UsersModel } from './users.schema'
import { ObjectId, Types } from 'mongoose'

const createUsersIntoDB = async (users: Tusers) => {
  const createsUsers = await UsersModel.create(users)
  return createsUsers
}

const getAllUsersIntoDB = async () => {
  const result = await UsersModel.find()
  return result
}

const getSingleUserIntoDB = async (id: string) => {
  const result = await UsersModel.findOne({
    _id: id,
  })
  return result
}

const updateSingleUserIntoDB = async (id: string, update: Tusers) => {
  const result = await UsersModel.updateOne(
    { _id: id },
    {
      $set: {
        ...update,
      },
    },
  )
  return result
}
const deleteSingleUserIntoDB = async (id: string) => {
  const result = await UsersModel.deleteOne({ _id: id })
  return result
}

export const usersServices = {
  createUsersIntoDB,
  getAllUsersIntoDB,
  getSingleUserIntoDB,
  updateSingleUserIntoDB,
  deleteSingleUserIntoDB,
}
