import { NextFunction, Request, Response } from 'express'
import { CustomError } from './errorClasses/custom.error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  // 独自定義のエラーの場合
  if (err instanceof CustomError) {
    err.apiErrorResponse(res)
  } else {
    // 予期しないエラー
    console.error(err)
    res.sendStatus(500)
  }
  next(err)
}
