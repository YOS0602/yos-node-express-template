/**
 * 契約情報をDBにINSERTする
 *
 * @param contract
 * @param content
 * @returns boolean
 */
export const insertContractDb = async (/*contract, content*/): Promise<boolean> => {
  /*
   * put code to call database here
   * this can be either an ORM model or code to call the database through a driver or querybuilder
   * i.e.-
    INSERT INTO contracts (contract, content)
    VALUES (contract, content);
  */
  return true //just a dummy return as we aren't calling db right now
}
