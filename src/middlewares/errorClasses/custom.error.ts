import { Response } from 'express'

export class CustomError implements Error {
  // Error interfaceの実装
  name = 'CustomError'
  message: string
  stack?: string | undefined
  cause?: Error | undefined

  status = 500 // HTTPステータス
  code: string // 独自定義エラーコード

  constructor({
    code,
    message,
    status,
    stack,
    error,
  }: {
    code: string
    message: string
    status: number
    stack?: string | undefined
    error?: Error | undefined
  }) {
    this.code = code
    this.message = message
    this.status = status
    this.stack = stack
    this.cause = error
  }

  /**
   * エラーログを出力し、セットされた情報を元にレスポンスを返す
   *
   * @param res
   */
  public apiErrorResponse(res: Response): void {
    console.error({
      name: this.name,
      status: this.status,
      code: this.code,
      message: this.message,
      stack: this.stack,
      error: this.cause,
    })
    res.status(this.status)
    res.json({ code: this.code })
  }
}
