import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { NotificationTypes } from '../../types/redux/notifications.types'
import { ISingletonInput, SingletonsEffect } from '../../types/redux/singletons.types'
import { addNotification } from '../notifications/notifications.actions'
import { createSingletonSucceeded, fetchSingletonsSucceeded, fetchSingletonSucceeded } from './singletons.actions'

export const fetchSingletons = (): SingletonsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    try {
        const response = await cmsApi.get('/singletons', {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchSingletonsSucceeded(response.data))
        } else {
            dispatch(addNotification({
                heading: 'Error',
                message: 'Something went wrong, try again later',
                type: NotificationTypes.ERROR
            }))
        }
    } catch (error) {
        dispatch(addNotification({
            heading: 'Error',
            message: 'Something went wrong, try again later',
            type: NotificationTypes.ERROR
        }))
    }
}

export const fetchSingleton = (id: string): SingletonsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    try {
        const response = await cmsApi.get(`/singletons/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchSingletonSucceeded(response.data))
        } else {
            dispatch(addNotification({
                heading: 'Error',
                message: 'Something went wrong, try again later',
                type: NotificationTypes.ERROR
            }))
        }
    } catch (error) {
        dispatch(addNotification({
            heading: 'Error',
            message: 'Something went wrong, try again later',
            type: NotificationTypes.ERROR
        }))
    }
}

export const createSingleton = (singletonInput: ISingletonInput): SingletonsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

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
        } else {
            dispatch(addNotification({
                heading: 'Error',
                message: 'Something went wrong, try again later',
                type: NotificationTypes.ERROR
            }))
        }
    } catch (error) {
        dispatch(addNotification({
            heading: 'Error',
            message: 'Something went wrong, try again later',
            type: NotificationTypes.ERROR
        }))
    }
}

export const updateSingleton = (singletonInput: ISingletonInput, id: string): SingletonsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

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
        } else {
            dispatch(addNotification({
                heading: 'Error',
                message: 'Something went wrong, try again later',
                type: NotificationTypes.ERROR
            }))
        }
    } catch (error) {
        dispatch(addNotification({
            heading: 'Error',
            message: 'Something went wrong, try again later',
            type: NotificationTypes.ERROR
        }))
    }
}
