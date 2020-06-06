import { History } from 'history'
import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { NotificationTypes } from '../../types/redux/notifications.types'
import { ICollectionInput, CollectionsEffect } from '../../types/collections.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { addNotification } from '../notifications/notifications.actions'
import {
    createCollectionSucceeded,
    fetchCollectionSucceeded,
    collectionEffectError,
    startCollectionEffect
} from './collections.actions'

export const fetchCollection = (id: string): CollectionsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startCollectionEffect())

    try {
        const response = await cmsApi.get(`/collections/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchCollectionSucceeded(response.data))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(collectionEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(collectionEffectError())
    }
}

export const createCollection = (collectionInput: ICollectionInput, history: History, redirect: string): CollectionsEffect => async (
    dispatch,
    getState
) => {
    const currentState: IState = getState()

    dispatch(startCollectionEffect())

    try {
        const response = await cmsApi.post(`/collections`, collectionInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(createCollectionSucceeded())
            dispatch(addNotification({
                heading: 'Success',
                message: 'The collection has been created',
                type: NotificationTypes.SUCCESS
            }))
            history.push(redirect)
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(collectionEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(collectionEffectError())
    }
}

export const updateCollection = (
    collectionInput: ICollectionInput,
    id: string,
    history: History,
    redirect: string
): CollectionsEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startCollectionEffect())

    try {
        const response = await cmsApi.patch(`/collections/${id}`, collectionInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(addNotification({
                heading: 'Success',
                message: 'The collection has been updated',
                type: NotificationTypes.SUCCESS
            }))
            history.push(redirect)
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(collectionEffectError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(collectionEffectError())
    }
}
