import { History } from 'history'
import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { NotificationTypes } from '../../types/redux/notifications.types'
import { IUserGroupInput, UserGroupsEffect } from '../../types/userGroups.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { addNotification } from '../notifications/notifications.actions'
import {
    createUserGroupSucceeded,
    fetchUserGroupSucceeded,
    userGroupEffectError,
    startUserGroupEffect
} from './userGroups.actions'

export const fetchUserGroup = (id: string): UserGroupsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startUserGroupEffect())

    try {
        const response = await cmsApi.get(`/userGroups/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchUserGroupSucceeded(response.data))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(userGroupEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(userGroupEffectError())
    }
}

export const createUserGroup = (userGroupInput: IUserGroupInput, history: History, redirect: string): UserGroupsEffect => async (
    dispatch,
    getState
) => {
    const currentState: IState = getState()

    dispatch(startUserGroupEffect())

    try {
        const response = await cmsApi.post(`/userGroups`, userGroupInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(createUserGroupSucceeded())
            dispatch(addNotification({
                heading: 'Success',
                message: 'The user group has been created',
                type: NotificationTypes.SUCCESS
            }))
            history.push(redirect)
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(userGroupEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(userGroupEffectError())
    }
}

export const updateUserGroup = (
    userGroupInput: IUserGroupInput,
    id: string,
    history: History,
    redirect: string
): UserGroupsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startUserGroupEffect())

    try {
        const response = await cmsApi.patch(`/userGroups/${id}`, userGroupInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(addNotification({
                heading: 'Success',
                message: 'The user group has been updated',
                type: NotificationTypes.SUCCESS
            }))
            history.push(redirect)
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(userGroupEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(userGroupEffectError())
    }
}
