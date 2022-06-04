import { mockReq, mockRes } from 'sinon-express-mock'
import { DatabaseError } from '../../middlewares/errorClasses/database.error'
import * as contractServiceModule from '../../services/contract.service'
import { postContract } from '../contract.controller'

/**
 * Controllerの呼び出しに必須である、NextFunction, Request, Responseオブジェクトを生成する
 * @returns object
 * @returns object.reqMock
 * @returns object.resMock
 * @returns object.nextMock
 */
const defaultReqResNext = () => {
  const req = {
    query: {
      id: 'contract',
    },
  }

  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
    sendStatus: jest.fn().mockReturnThis(),
  }

  const next = jest.fn(() => 'next function is called')
  return { req, res, next }
}

describe('postContract', () => {
  let spy: jest.SpyInstance
  beforeEach(() => {
    spy = jest.spyOn(contractServiceModule, 'createContract')
  })
  afterEach(() => {
    spy.mockClear()
  })

  it('should return 201', async () => {
    // given expressにおけるHTTP関連オブジェクトのmock
    const { req, res, next } = defaultReqResNext()
    const mockedReq = mockReq(req)
    const mockedRes = mockRes(res)

    // when createContractがresolveされる
    spy.mockResolvedValueOnce(true)
    await postContract(mockedReq, mockedRes, next)

    // then ステータスコードが201
    expect(mockedRes.sendStatus.mock.calls[0][0]).toBe(201)
    expect(spy).toBeCalledTimes(1)
  })

  it('should throw', async () => {
    // given expressにおけるHTTP関連オブジェクトのmock
    const { req, res, next } = defaultReqResNext()
    const mockedReq = mockReq(req)
    const mockedRes = mockRes(res)

    // when createContractがrejectされる
    spy.mockRejectedValueOnce(
      new DatabaseError({ code: '000', message: 'createContract failed', status: 500 })
    )
    await postContract(mockedReq, mockedRes, next)

    // then レスポンスが返却されない、nextで次のミドルウェアが呼ばれる
    expect(mockedRes.sendStatus.mock.calls.length).toBe(0)
    expect(next).toHaveBeenCalledTimes(1)
  })
})
