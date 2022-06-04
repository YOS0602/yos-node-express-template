// errorオブジェクトがどのインスタンスで渡ってくるかを事前に把握できないため、anyを例外的に許可する
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { CustomError } from './errorClasses/custom.error'
// import { DatabaseError } from './errorClasses/database.error'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  if (isOriginallyDefinedError(err)) {
    // 独自定義のエラーの場合
    err.apiErrorResponse(res)
  } else {
    // 予期しないエラー
    console.error(err)
    res.status(500).send({ message: 'unknown error' })
    next(err)
  }
}

/**
 * 引数で渡されたオブジェクトが、独自定義のエラークラスインスタンスであるかを検証する
 * CustomErrorクラスおよびそれを継承したクラスが該当する
 * @param err
 * @returns boolean
 */
const isOriginallyDefinedError = (err: any) => {
  if (err instanceof CustomError) return true
  return false
}
