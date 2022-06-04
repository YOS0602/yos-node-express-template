import { makeNegative, reverseWords } from '../common.util'

describe('common.util', () => {
  it('makeNegative', () => {
    expect(makeNegative(1)).toBe(-1)
    expect(makeNegative(-1)).toBe(-1)
    expect(makeNegative(0)).toBe(0)
    expect(makeNegative(Infinity)).toBe(-Infinity)
    expect(makeNegative(-Infinity)).toBe(-Infinity)
  })

  it('reverseWords', () => {
    expect(reverseWords('This is an example!')).toBe('sihT si na !elpmaxe')
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow')
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe(
      'ehT kciuq nworb xof spmuj revo eht yzal .god'
    )
    expect(reverseWords('apple')).toBe('elppa')
    expect(reverseWords('a b c d')).toBe('a b c d')
  })
})
