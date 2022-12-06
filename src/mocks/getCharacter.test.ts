import getCharacter, { filterByName } from './getCharacter'

describe('getCharacter returns quotes by character', () => {
  test('te', () => {
    const character = 'Homer'
    const quote = getCharacter(character)
    expect(quote.character).toContain(character)
  })
})
