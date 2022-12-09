
import userEvent from '@testing-library/user-event'
import sleep from '../helpers/sleep'
import { act, render, screen } from '../test-utils'
import Noticias from '../features/news/Noticias'

describe('Notice', () => {
    test('Renders cards', async () => {
        const expected = 'La más reciente es una teoría de que un episodio de 2010 del programa, titulado "Lisa Simpson, e'
        render (<Noticias/>)
        await act(async () => {await sleep(1500)})
        const listaNoticias = await screen.findByTestId('noticeList')
        expect(listaNoticias).toHaveTextContent(expected)
    })
    
    test('shows complete information of a card clicking "ver mas"', async () => {
        render (<Noticias/>)
        await act(async() => {await sleep(1500)})
        const seeMoreButtons = await screen.findAllByText('Ver más')
        await userEvent.click(seeMoreButtons[0])
        const listaNoticias = await screen.findByTestId('noticeList')
        const closeImg = await screen.findByAltText('close-button')
        expect(closeImg).toBeInTheDocument()
    })
    
    test('shows a premium card', async () => {
        const expected = 'Suscríbete a nuestro Newsletter'
        render (<Noticias/>)
        await act(async() => {await sleep(1500)})
        const listaNoticias = await screen.findByTestId('noticeList')
        const seeMoreButtons = await screen.findAllByText('Ver más')
        await userEvent.click(seeMoreButtons[2])
        expect(listaNoticias).toHaveTextContent(expected)


    })
})