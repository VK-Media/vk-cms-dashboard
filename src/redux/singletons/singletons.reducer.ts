import produce from 'immer'
import { ISingleton, ISingletonsState, SingletonsAction } from '../../types/redux/singletons.types'

export const initialState: ISingletonsState = {
    singletons: [],
    loading: false,
    count: 0
}

const reducer = (state = initialState, action: SingletonsAction) => {
    switch (action.type) {
        case 'fetchSingletonsSuccess':
            return produce(state, draft => {
                if (action.payload.append) {
                    draft.singletons = [...state.singletons, ...action.payload.singletons]
                } else {
                    draft.singletons = action.payload.singletons
                }

                draft.loading = false
                draft.count = action.payload.count
            })
        case 'fetchSingletonSucceeded':
            return produce(state, draft => {
                draft.singletonToUpdate = action.payload
                draft.loading = false
            })
        case 'startSingletonEffect':
            return produce(state, draft => {
                draft.loading = true
            })
        case 'singletonEffectError':
            return produce(state, draft => {
                draft.loading = false
            })
        case 'deleteSingletonSuccess':
            return produce(state, draft => {
                draft.singletons = state.singletons.filter((singleton: ISingleton) => {
                    return singleton._id !== action.payload
                })
                draft.count = state.count - 1
            })
        default:
            return state
    }
}

export default reducer
