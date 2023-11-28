import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { router } from './modules/users.router'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Well Come To CRUD Mastery Sever')
})

export default app
