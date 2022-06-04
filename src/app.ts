import express, { NextFunction, Request, Response } from 'express'

// 環境変数の読み込み(for Local)
import dotenv from 'dotenv'
dotenv.config()

const app: express.Express = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello world')
})

app.listen(3000, () => {
  console.log('Node.js app listening on port 3000!')
})
