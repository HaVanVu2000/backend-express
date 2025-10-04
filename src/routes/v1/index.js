import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from './boardRoute'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Api v1 are ready to use' })
})

Router.use('/boards', boardRouter)

export const APIs_V1 = Router
