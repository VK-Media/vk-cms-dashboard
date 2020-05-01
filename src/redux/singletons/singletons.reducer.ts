import produce from 'immer'
import { ISingletonsState, SingletonsAction } from '../../types/redux/singletons.types'

export const initialState: ISingletonsState = {
    singletons: []
}

const reducer = (state = initialState, action: SingletonsAction) => {
    switch (action.type) {
        case 'fetchSingletonsSucceeded':
            return produce(state, draft => {
                draft.singletons = action.payload
            })
        case 'fetchSingletonSucceeded':
            return produce(state, draft => {
                draft.singletonToUpdate = action.payload
            })
        default:
            return state
    }
}

export default reducer
