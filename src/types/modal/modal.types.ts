import { buttonVariants } from '@bit/vk-media.cms.button'
import { Action } from 'redux'

export enum ModalSize {
    'SMALL' = 'sm',
    'MEDIUM' = 'md',
    'LARGE' = 'lg'
}

export interface IModal {
    heading: string
    body: string
    cancelButtonText: string
    confirmButtonText: string
    confirmButtonHandler: CallableFunction
    type: buttonVariants
    size: ModalSize
}

export interface IModalInput {
    heading?: string
    body?: string
    cancelButtonText?: string
    confirmButtonText?: string
    confirmButtonHandler: CallableFunction
    type?: buttonVariants
    size?: ModalSize
}

export interface IModalState {
    show: boolean
    modal: IModal
}

export interface IShowModal extends Action {
    type: 'showModal'
    payload: IModalInput
}

export interface IHideModal extends Action {
    type: 'hideModal'
}

export type ModalAction = IShowModal | IHideModal
