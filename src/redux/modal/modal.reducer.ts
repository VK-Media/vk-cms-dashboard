import { buttonVariants } from '@bit/vk-media.cms.button'
import produce from 'immer'
import { IModalState, ModalAction, ModalSize } from '../../types/modal/modal.types'

export const initialState: IModalState = {
    show: false,
    modal: {
        heading: 'Confirm',
        body: 'Are you sure?',
        type: buttonVariants.DEFAULT,
        size: ModalSize.SMALL,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm',
        confirmButtonHandler: () => console.log('Confirmed!')
    }
}

const reducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case 'showModal':
            return produce(state, draft => {
                draft.show = true
                draft.modal = { ...initialState.modal, ...action.payload }
            })
        case 'hideModal':
            return produce(state, draft => {
                draft.show = false
            })
        default:
            return state
    }
}

export default reducer
