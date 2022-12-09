import firstLetterToUpperCase from './firstLetterToUpperCase'

describe('testing fn firstLetterToUpperCase',() => {
    test('returns a word capitalized',() => {
        const word = 'hello'
        const expected = 'Hello'
        const capitalizedWord = firstLetterToUpperCase(word)
        expect(capitalizedWord).toBe(expected)
    })
})