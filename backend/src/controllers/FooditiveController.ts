// Reference the Request and Response types from express
import { Request, Response } from 'express'

export function index(req: Request, res: Response): void {
  res.send('This is my default response..')
}

export function getWelcome(req: Request, res: Response): void {
  res.send('This is my welcome response...')
}
