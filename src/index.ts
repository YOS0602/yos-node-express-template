import express, { NextFunction, Request, Response } from 'express'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

type User = {
  id: number
  name: string
  email: string
}

const users: User[] = [
  { id: 1, name: 'User1', email: 'user1@test.local' },
  { id: 2, name: 'User2', email: 'user2@test.local' },
  { id: 3, name: 'User3', email: 'user3@test.local' },
]

//一覧取得
app.get('/users', (req: Request, res: Response) => {
  res.send(JSON.stringify(users))
})
