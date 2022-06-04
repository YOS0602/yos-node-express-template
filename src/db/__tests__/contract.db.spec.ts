import { insertContractDb } from '../contract.db'

it('insertContractDb ok', async () => {
  const res = await insertContractDb()
  expect(res).toBeTruthy()
})
