import { INoticiasNormalizadas } from '../types'
import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from '../styled'

interface props {
    notice: INoticiasNormalizadas
    onClickReadButton: React.MouseEventHandler<HTMLButtonElement> 
}

const NoticeCard = ({notice, onClickReadButton}:props) => {
    return <>
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={notice.imagen} />
            <TituloTarjetaNoticia>{notice.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{notice.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {notice.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={onClickReadButton}>Ver más</BotonLectura>
        </TarjetaNoticia>
    </>
}
export default NoticeCard