import produce from 'immer'
import { IUsersState, UsersAction } from '../../types/redux/users.types'

export const initialState: IUsersState = {
    users: [],
    userToUpdate: undefined,
    loading: false,
    error: false
}

const reducer = (state = initialState, action: UsersAction) => {
    switch (action.type) {
        case 'startFetchUsers':
            return produce(state, draft => {
                draft.loading = true
            })
        case 'fetchUsersFailed':
            return produce(state, draft => {
                draft.loading = false
                draft.error = true
            })
        case 'fetchUsersSucceeded':
            return produce(state, draft => {
                draft.users = action.payload
                draft.loading = false
                draft.error = false
            })
        case 'fetchSingleUserSucceeded':
            return produce(state, draft => {
                draft.userToUpdate = action.payload
            })
        default:
            return state
    }
}

export default reducer
