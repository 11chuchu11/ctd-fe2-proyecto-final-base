import  firstLetterToUpperCase  from '../../helpers/firstLetterToUpperCase'
import  minutesPassed  from '../../helpers/minutesPassed'
import { obtenerNoticias } from './fakeRest'
import { INoticiasNormalizadas } from './types'

const getInformation = async () => {
    const response = await obtenerNoticias()
    const data:INoticiasNormalizadas[] = response.map( notice => ({
        id:notice.id,
        titulo:firstLetterToUpperCase(notice.titulo),
        descripcion: notice.descripcion,
        fecha: `Hace ${minutesPassed(notice.fecha)} minutos`,
        esPremium: notice.esPremium,
        imagen: notice.imagen,
        descripcionCorta: notice.descripcion.substring(0, 100),
    }))
    return data
}

export default getInformation