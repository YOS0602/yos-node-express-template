import { insertContractDb } from '../db/contract.db'
import { DatabaseError } from '../middlewares/errorClasses/database.error'

/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the contract, add them to this service
 */
export const createContract = async (/* contract, content */) => {
  try {
    return await insertContractDb(/* contract, content */)
  } catch (e) {
    console.log('ERROR in Services: createContract')
    console.error(e)
    throw new DatabaseError({ code: '111', message: 'DatabaseError', status: 500 })
  }
}
