import quotes from '../mocks/quotesResponses'
import firstLetterToUpperCase from './firstLetterToUpperCase'

const filterByName = (character: string) => {
    const characterName = firstLetterToUpperCase(character)
    const filteredQuotes = quotes.filter((element) => element.character.includes(characterName))
    return filteredQuotes
}

export default filterByName

