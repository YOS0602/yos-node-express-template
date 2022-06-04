import { createContract } from '../contract.service'
import * as contractDbModule from '../../db/contract.db'
import { DatabaseError } from '../../middlewares/errorClasses/database.error'

describe('createContract', () => {
  let spy: jest.SpyInstance
  beforeEach(() => {
    spy = jest.spyOn(contractDbModule, 'insertContractDb')
  })
  afterEach(() => {
    spy.mockClear()
  })

  it('resolve', async () => {
    spy.mockResolvedValueOnce(true)
    const res = await createContract()
    expect(res).toBeTruthy()
    expect(spy).toBeCalledTimes(1)
  })

  it('reject aaa', async () => {
    spy.mockRejectedValueOnce(false)
    await expect(createContract()).rejects.toBeInstanceOf(DatabaseError)
    expect(spy).toBeCalledTimes(1)
  })
})
