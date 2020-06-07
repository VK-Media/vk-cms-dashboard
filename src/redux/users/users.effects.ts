import { History } from 'history'
import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { NotificationTypes } from '../../types/redux/notifications.types'
import { IUserInput, UsersEffect } from '../../types/users.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { addNotification } from '../notifications/notifications.actions'
import {
    createUserSucceeded,
    fetchUserSucceeded,
    userEffectError,
    startUserEffect
} from './users.actions'

export const fetchUser = (id: string): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startUserEffect())

    try {
        const response = await cmsApi.get(`/users/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchUserSucceeded(response.data))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(userEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(userEffectError())
    }
}

export const createUser = (userInput: IUserInput, history: History, redirect: string): UsersEffect => async (
    dispatch,
    getState
) => {
    const currentState: IState = getState()

    dispatch(startUserEffect())

    try {
        const response = await cmsApi.post(`/users`, userInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(createUserSucceeded())
            dispatch(addNotification({
                heading: 'Success',
                message: 'The user has been created',
                type: NotificationTypes.SUCCESS
            }))
            history.push(redirect)
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(userEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(userEffectError())
    }
}

export const updateUser = (
    userInput: IUserInput,
    id: string,
    history: History,
    redirect: string
): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startUserEffect())

    try {
        const response = await cmsApi.patch(`/users/${id}`, userInput, {
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
            dispatch(userEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(userEffectError())
    }
}
