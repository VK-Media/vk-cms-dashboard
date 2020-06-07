import produce from 'immer'
import { IUserGroup, IUserGroupsState, UserGroupsAction } from '../../types/userGroups.types'

export const initialState: IUserGroupsState = {
    userGroups: [],
    loading: false,
    count: 0
}

const reducer = (state = initialState, action: UserGroupsAction) => {
    switch (action.type) {
        case 'fetchUserGroupsSuccess':
            return produce(state, draft => {
                if (action.payload.append) {
                    draft.userGroups = [...state.userGroups, ...action.payload.userGroups]
                } else {
                    draft.userGroups = action.payload.userGroups
                }

                draft.loading = false
                draft.count = action.payload.count
            })
        case 'fetchUserGroupSucceeded':
            return produce(state, draft => {
                draft.userGroupToUpdate = action.payload
                draft.loading = false
            })
        case 'startUserGroupEffect':
            return produce(state, draft => {
                draft.loading = true
            })
        case 'userGroupEffectError':
            return produce(state, draft => {
                draft.loading = false
            })
        case 'deleteUserGroupSuccess':
            return produce(state, draft => {
                draft.userGroups = state.userGroups.filter((userGroup: IUserGroup) => {
                    return userGroup._id !== action.payload
                })
                draft.count = state.count - 1
            })
        default:
            return state
    }
}

export default reducer
