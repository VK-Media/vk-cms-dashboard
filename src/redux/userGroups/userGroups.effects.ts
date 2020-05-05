import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { UserGroupsEffect } from '../../types/redux/userGroups.types'
import { fetchUserGroupsFailed, fetchUserGroupsSucceeded, startFetchUserGroups } from './userGroups.actions'

export const fetchUserGroups = (): UserGroupsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startFetchUserGroups())

    try {
        const response = await cmsApi.get('/userGroups', {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchUserGroupsSucceeded(response.data.objects))
        } else {
            dispatch(fetchUserGroupsFailed())
        }
    } catch (error) {
        dispatch(fetchUserGroupsFailed())
    }
}
