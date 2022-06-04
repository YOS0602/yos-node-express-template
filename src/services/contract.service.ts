import { insertContractDb } from '../db/contract.db'

/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the contract, add them to this service
 */
export const createContract = async (/* contract, content */) => {
  try {
    return await insertContractDb(/* contract, content */)
  } catch (e) {
    console.error(e)
    throw new Error()
  }
}
