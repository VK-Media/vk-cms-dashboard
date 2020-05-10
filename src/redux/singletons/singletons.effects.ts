import { History } from 'history'
import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { NotificationTypes } from '../../types/redux/notifications.types'
import { ISingletonInput, SingletonsEffect } from '../../types/redux/singletons.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { addNotification } from '../notifications/notifications.actions'
import {
    createSingletonSucceeded,
    fetchSingletonSucceeded,
    singletonEffectError,
    startSingletonEffect
} from './singletons.actions'

export const fetchSingleton = (id: string): SingletonsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startSingletonEffect())

    try {
        const response = await cmsApi.get(`/singletons/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchSingletonSucceeded(response.data))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(singletonEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(singletonEffectError())
    }
}

export const createSingleton = (singletonInput: ISingletonInput, history: History): SingletonsEffect => async (
    dispatch,
    getState
) => {
    const currentState: IState = getState()

    dispatch(startSingletonEffect())

    try {
        const response = await cmsApi.post(`/singletons`, singletonInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(createSingletonSucceeded())
            dispatch(addNotification({
                heading: 'Success',
                message: 'The singleton has been created',
                type: NotificationTypes.SUCCESS
            }))
            history.push('/singletons')
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(singletonEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(singletonEffectError())
    }
}

export const updateSingleton = (
    singletonInput: ISingletonInput,
    id: string,
    history: History
): SingletonsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startSingletonEffect())

    try {
        const response = await cmsApi.patch(`/singletons/${id}`, singletonInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(addNotification({
                heading: 'Success',
                message: 'The singleton has been updated',
                type: NotificationTypes.SUCCESS
            }))
            history.push('/singletons')
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(singletonEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(singletonEffectError())
    }
}
