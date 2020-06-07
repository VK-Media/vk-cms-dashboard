import produce from 'immer'
import { IUser, IUsersState, UsersAction } from '../../types/users.types'

export const initialState: IUsersState = {
    users: [],
    loading: false,
    count: 0
}

const reducer = (state = initialState, action: UsersAction) => {
    switch (action.type) {
        case 'fetchUsersSuccess':
            return produce(state, draft => {
                if (action.payload.append) {
                    draft.users = [...state.users, ...action.payload.users]
                } else {
                    draft.users = action.payload.users
                }

                draft.loading = false
                draft.count = action.payload.count
            })
        case 'fetchUserSucceeded':
            return produce(state, draft => {
                draft.userToUpdate = action.payload
                draft.loading = false
            })
        case 'startUserEffect':
            return produce(state, draft => {
                draft.loading = true
            })
        case 'userEffectError':
            return produce(state, draft => {
                draft.loading = false
            })
        case 'deleteUserSuccess':
            return produce(state, draft => {
                draft.users = state.users.filter((user: IUser) => {
                    return user._id !== action.payload
                })
                draft.count = state.count - 1
            })
        default:
            return state
    }
}

export default reducer
