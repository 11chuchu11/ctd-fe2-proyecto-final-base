import {  CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from '../styled'
import { IModal } from '../types.d'

interface props{
    values:IModal
}

const Modal = ({values}:props) => {
    return <ContenedorModal>
        <TarjetaModal>
            <CloseButton onClick={values.closeButton}>
                <img src={values?.imgCloseButton?.src} alt={values?.imgCloseButton?.alt} />
            </CloseButton>
            <ImagenModal src={values?.imgModal?.src} alt={values?.imgModal?.alt} />
            <CotenedorTexto>
                <TituloModal>{values.titleModal}</TituloModal>
                <DescripcionModal>{values.descriptionModal}</DescripcionModal>
                {values.suscribeButton}
            </CotenedorTexto>
        </TarjetaModal>
    </ContenedorModal>
}

export default Modal