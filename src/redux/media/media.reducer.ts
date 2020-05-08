import produce from 'immer'
import { IMediaState, MediaAction } from '../../types/media/media.types'

export const initialState: IMediaState = {
    media: [],
    loading: false
}

const reducer = (state = initialState, action: MediaAction) => {
    switch (action.type) {
        case 'fetchMediaSuccess':
            return produce(state, draft => {
                draft.media = action.payload
                draft.loading = false
            })
        case 'mediaError':
            return produce(state, draft => {
                draft.loading = false
            })
        case 'startMedia':
            return produce(state, draft => {
                draft.loading = true
            })
        default:
            return state
    }
}

export default reducer
