export type Orders = {
  productName: string
  price: number
  quantity: number
}

export type Tusers = {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: boolean
  hobbies: [string, string]
  address: {
    street: string
    city: string
    country: string
  }
  orders?: Orders[]
}
