/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}

type imgProperties = {
    src:string | undefined
    alt:string | undefined
}

export interface IModal{
    closeButton: React.MouseEventHandler<HTMLButtonElement> | undefined
    imgCloseButton: imgProperties  | undefined
    imgModal: imgProperties    | undefined
    titleModal: string | undefined
    descriptionModal: string   | undefined
    suscribeButton: StyledComponent<'button', any, {}, never> | null | undefined

}