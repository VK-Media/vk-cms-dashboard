import produce from 'immer'
import { IUserGroupsState, UserGroupsAction } from '../../types/redux/userGroups.types'

export const initialState: IUserGroupsState = {
    userGroups: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action: UserGroupsAction) => {
    switch (action.type) {
        case 'startFetchUserGroups':
            return produce(state, draft => {
                draft.loading = true
            })
        case 'fetchUserGroupsFailed':
            return produce(state, draft => {
                draft.loading = false
                draft.error = true
            })
        case 'fetchUserGroupsSucceeded':
            return produce(state, draft => {
                draft.userGroups = action.payload
                draft.loading = false
                draft.error = false
            })
        default:
            return state
    }
}

export default reducer
