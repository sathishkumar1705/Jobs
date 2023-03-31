import { Router, Request, Response } from 'express'
import authRouter from './authUsers.route'
import jobRouter from './job.route'

const routes = Router()
routes.use('/auth', authRouter) 
routes.use('/job', jobRouter)

export default routes