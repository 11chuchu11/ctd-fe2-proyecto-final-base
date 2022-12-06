import Cita from './Cita'
import { act, render, screen } from './../../test-utils'
import userEvent from '@testing-library/user-event'

const timeToRender = (timeToWait: number) =>
  new Promise((resolve) => setTimeout(resolve, timeToWait))

describe('Quotes', () => {
  test('Shows random quotes', async () => {
    render(<Cita />)
    const buttonGetQuote = screen.getByText('Obtener cita aleatoria')
    userEvent.click(buttonGetQuote)
    const quote = screen.getByText('No se encontro ninguna cita')
    await act(async () => {
      await timeToRender(10)
    })
    expect(quote.innerText).not.toBe('')
  })

  test('show a quote of a character', async () => {
    render(<Cita />)
    const characterName = 'Homer'
    const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
    await userEvent.type(input, characterName)
    const buttonGetQuote = await screen.findByText('Obtener Cita')
    userEvent.click(buttonGetQuote)
    await timeToRender(10)
    const character = await screen.findByTestId('characterId')
    await timeToRender(10)
    expect(character).toHaveTextContent(characterName)
  })

  test('shows error when insert an invalid name', async () => {
    render(<Cita />)
    const characterName = 'vnbdf'
    const quote = screen.getByText('No se encontro ninguna cita')
    const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
    await userEvent.type(input, characterName)
    const buttonGetQuote = await screen.findByText('Obtener Cita')
    userEvent.click(buttonGetQuote)
    await timeToRender(10)
    expect(quote).toHaveTextContent('Por favor ingrese un nombre válido')
  })
})
