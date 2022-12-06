import quotes from './quotesResponses'
import { Quotes } from './types'

const getRandomNumber = (max: number) => Math.floor(Math.random() * max)
export const filterByName = (character: string) =>
  quotes.filter((e) => e.character.includes(character))

const getCharacter: (character: string) => Quotes = (character: string) => {
  let toReturn: Quotes
  if (!character) toReturn = quotes[getRandomNumber(quotes.length + 1)]
  else {
    const quotesOfCharacter = filterByName(character)
    toReturn = quotesOfCharacter[getRandomNumber(quotesOfCharacter.length + 1)]
  }
  return toReturn
}

export default getCharacter
