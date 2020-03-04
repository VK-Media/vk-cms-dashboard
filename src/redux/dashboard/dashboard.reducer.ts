import produce from 'immer'

import { DashboardAction, IDashboardState } from '../../types/redux/dashboard.types'

export const initialState: IDashboardState = {
    menuExpanded: false
}

const reducer = (state = initialState, action: DashboardAction) => {
    switch (action.type) {
        case 'toggleMenu':
            return produce(state, draft => {
                draft.menuExpanded = !state.menuExpanded
            })
        default:
            return state
    }
}

export default reducer
