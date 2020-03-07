import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { UsersEffect } from '../../types/redux/users.types'
import { fetchUsersFailed, fetchUsersSucceeded, startFetchUsers } from './users.actions'

export const fetchUsers = (): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startFetchUsers())

    try {
        const response = await cmsApi.get('/users', {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchUsersSucceeded(response.data))
        } else {
            dispatch(fetchUsersFailed())
        }
    } catch (error) {
        dispatch(fetchUsersFailed())
    }
}
