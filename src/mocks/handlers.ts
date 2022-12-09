import getCharacter from './getCharacter'
import { rest } from 'msw'

export const handlers = [
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
        const characterName = req.url.searchParams.get('character')
        if (characterName === null)
            return res(ctx.status(200), ctx.json([getCharacter('')]))

        if (typeof characterName === 'string' && isNaN(parseInt(characterName)))
            return res(ctx.status(200), ctx.json([getCharacter(characterName)]))
    }),
]
