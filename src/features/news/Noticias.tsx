import { useEffect, useState } from 'react'
import { SuscribeImage, CloseButton as Close } from '../../assets'
import  getInformation  from './getInformation'
import Modal from './Modal/Modal'
import { ContenedorNoticias, ListaNoticias, TituloNoticias, BotonSuscribir } from './styled'
import NoticeCard from './NoticeCard/NoticeCard'
import { INoticiasNormalizadas } from './types.d'



const Noticias = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([])
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null)

    const modalData = {
        premium: {
            closeButton: () => setModal(null),
            imgCloseButton: {src:Close, alt:'close-button'},
            imgModal: {src:SuscribeImage,alt:'mr-burns-excelent'},
            titleModal: 'Suscríbete a nuestro Newsletter',
            descriptionModal: 'Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.',
            suscribeButton:<BotonSuscribir onClick={() => setTimeout(() => {alert('Suscripto!')
                setModal(null)}, 1000)}>Suscríbete</BotonSuscribir>
        },
        noPremium: {
            closeButton: () => setModal(null),
            imgCloseButton: {src:Close, alt:'close-button'},
            imgModal: {src:modal?.imagen,alt:'news-image'},
            titleModal: modal?.titulo,
            descriptionModal: modal?.descripcion,
            suscribeButton:null
        }
    }

    const fillNoticias = async () => {
        const data = await getInformation()
        setNoticias(data)
    }


    useEffect(() => {
        fillNoticias()
    }, [])

    
    return (
        <ContenedorNoticias>
            <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
            <ListaNoticias data-testid='noticeList'>
                {noticias.map( (notice,index) => <NoticeCard key={`notice-${index}`} notice={notice} onClickReadButton={()=>setModal(notice)}/>)}
                {modal && <Modal values={modal.esPremium ? modalData.premium : modalData.noPremium}/>}
            </ListaNoticias>
        </ContenedorNoticias>

    )
}

export default Noticias
