import { NextFunction, Request, Response } from 'express'
import { createContract } from '../services/contract.service'

/*
 * call other imported services, or same service but different functions here if you need to
 */
export const postContract = async (req: Request, res: Response, next: NextFunction) => {
  // ESLintとtscでエラー出ちゃうのでコメントアウトしてます
  // const { contract, content } = req.body
  try {
    await createContract(/* contract, content */)
    // other service call (or same service, different function can go here)
    // i.e. - await generateContractPreview()
    res.sendStatus(201)
    next()
  } catch (e) {
    console.log('ERROR in Controllers: postContract')
    next(e)
  }
}
