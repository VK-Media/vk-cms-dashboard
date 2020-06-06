import { IHideModal, IModalInput, IShowModal } from '../../types/modal/modal.types'

export const showModal = (modal: IModalInput): IShowModal => ({
    type: 'showModal',
    payload: modal
})

export const hideModal = (): IHideModal => ({
    type: 'hideModal'
})
