import { Schema, model } from 'mongoose'
import { Tusers } from './users.interface'
import config from '../app/config'
import bcrypt from 'bcrypt'

const userSchema = new Schema<Tusers>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [
    { type: String, required: true },
    { type: String, required: true },
  ],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
})

// add hash password
userSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(user.password, Number(config.salt))
  next()
})
userSchema.post('save', async function (doc, next) {
  doc.password = ''
  next()
})

export const UsersModel = model<Tusers>('Users', userSchema)
