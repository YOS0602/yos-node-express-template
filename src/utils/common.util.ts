/**
 * 正の数->負の数
 * 負の数->負の数
 * 0->0
 * @param num
 * @returns 負の数
 */
export const makeNegative = (num: number): number => (num !== 0 ? -Math.abs(num) : 0)

/**
 * 文字列をスペースで区切った単語ごとにリバースする
 * @param str
 * @returns 加工文字列
 */
export const reverseWords = (str: string): string => {
  // 1. first create an array with the original words
  // 2. loop through each word and make it an array of characters
  // 3. reverse the array and make it a string again, so it is a word again but reversed
  // 4. join the resulting array
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ')
}
