// 環境変数の読み込み(for Local)
import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express'
import { router } from './routes/index.route'
import { errorHandler } from './middlewares/error.middleware'

// Expressアプリケーションの設定
const app: express.Express = express()
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: false }))

//CORS対応（下記を設定すると完全無防備なので本番環境にデプロイする前に整備してください）
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', '*')
//   res.header('Access-Control-Allow-Headers', '*')
//   next()
// })

// ルーティング設定
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('express server is working')
})
app.use('/api', router)
// 定義されていないルーティングは404をレスポンス
app.all('*', (req: Request, res: Response) => {
  res.status(404).send(`Not Found: ${req.method} ${req.originalUrl}`)
})

// エラーハンドリング
// expressミドルウェア読み込みの中で、最後に`use`する必要がある
// See: https://expressjs.com/ja/guide/error-handling.html
app.use(errorHandler)

export { app }
