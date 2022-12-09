import getCharacter from '../mocks/getCharacter'

describe('getCharacter', () => {
    test('returns quotes by character', () => {
        const character = 'Homer'
        const quote = getCharacter(character)
        expect(quote?.character).toContain(character)
    })
})
