import produce from 'immer'
import { IModulesState, ModulesAction } from '../../types/modules.types'

export const initialState: IModulesState = {
    modules: [],
    loading: false
}

const reducer = (state = initialState, action: ModulesAction) => {
    switch (action.type) {
        case 'fetchModulesSuccess':
            return produce(state, draft => {
                draft.modules = action.payload
                draft.loading = false
            })
        case 'modulesError':
            return produce(state, draft => {
                draft.loading = false
            })
        case 'startModules':
            return produce(state, draft => {
                draft.loading = true
            })
        default:
            return state
    }
}

export default reducer
