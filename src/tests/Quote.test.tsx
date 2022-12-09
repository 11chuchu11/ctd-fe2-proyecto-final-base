import Cita from '../features/quote/Cita'
import { act, render, screen } from '../test-utils'
import userEvent from '@testing-library/user-event'
import sleep from '../helpers/sleep'



describe('Quotes', () => {
    test('Shows random quotes', async () => {
        render(<Cita />)
        const buttonGetQuote = screen.getByText('Obtener cita aleatoria')
        userEvent.click(buttonGetQuote)
        const quote = screen.getByText('No se encontro ninguna cita')
        await act(async () => {
            await sleep(1000)
        })
        expect(quote.innerText).not.toBe('')
    })

    test('show a quote of a character', async () => {
        const characterName = 'Homer'
        render(<Cita />)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
        await userEvent.type(input, characterName)
        const buttonGetQuote = await screen.findByText('Obtener Cita')
        userEvent.click(buttonGetQuote)
        await sleep(1000)
        const character = await screen.findByTestId('characterId')
        await sleep(1000)
        expect(character).toHaveTextContent(characterName)
    })
    
    test('cleans input character when clicks on "borrar" button', async () => {
        const characterName = 'Homer'
        render(<Cita />)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
        const cleanButton = screen.getByText('Borrar')
        await userEvent.type(input, characterName)

        expect(input).toHaveValue(characterName)
        userEvent.click(cleanButton)
        expect(cleanButton).not.toHaveValue(characterName)
    })

    test('shows an error when insert an invalid name', async () => {
        render(<Cita />)
        const characterName = 'vnbdf'
        const quote = screen.getByText('No se encontro ninguna cita')
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
        await userEvent.type(input, characterName)
        const buttonGetQuote = await screen.findByText('Obtener Cita')
        userEvent.click(buttonGetQuote)
        await act(async () => { await sleep(1000) })
        expect(quote).toHaveTextContent('Por favor ingrese un nombre válido')
    })
})
