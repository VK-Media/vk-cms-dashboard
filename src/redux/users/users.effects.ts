import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { NotificationTypes } from '../../types/redux/notifications.types'
import { IUserInput, UsersEffect } from '../../types/redux/users.types'
import { addNotification } from '../notifications/notifications.actions'
import {
    createUserFailed,
    createUserSucceeded,
    deleteUserFailed,
    deleteUserSucceeded,
    fetchSingleUserFailed,
    fetchSingleUserSucceeded,
    fetchUsersFailed,
    fetchUsersSucceeded,
    startCreateUser,
    startDeleteUser,
    startFetchSingleUser,
    startFetchUsers,
    startUpdateUser,
    updateUserFailed,
    updateUserSucceeded
} from './users.actions'

export const fetchUsers = (): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startFetchUsers())

    try {
        const response = await cmsApi.get('/users', {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchUsersSucceeded(response.data.objects))
        } else {
            dispatch(fetchUsersFailed())
        }
    } catch (error) {
        dispatch(fetchUsersFailed())
    }
}

export const fetchSingleUser = (id: string): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startFetchSingleUser())

    try {
        const response = await cmsApi.get(`/users/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchSingleUserSucceeded(response.data))
        } else {
            dispatch(fetchSingleUserFailed())
        }
    } catch (error) {
        dispatch(fetchSingleUserFailed())
    }
}

export const createUser = (userInput: IUserInput): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startCreateUser())

    try {
        const response = await cmsApi.post(`/users`, userInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(createUserSucceeded(response.data))
        } else {
            dispatch(createUserFailed())
        }
    } catch (error) {
        dispatch(createUserFailed())
    }
}

export const updateUser = (userInput: IUserInput, id: string): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startUpdateUser())

    try {
        const response = await cmsApi.patch(`/users/${id}`, userInput, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(updateUserSucceeded(response.data))
            dispatch(addNotification({
                heading: 'Success',
                message: 'The user has been updated',
                type: NotificationTypes.SUCCESS
            }))
        } else {
            dispatch(updateUserFailed())
            dispatch(addNotification({
                heading: 'Error',
                message: 'Something went wrong, try again later',
                type: NotificationTypes.ERROR
            }))
        }
    } catch (error) {
        dispatch(updateUserFailed())
        dispatch(addNotification({
            heading: 'Error',
            message: 'Something went wrong, try again later',
            type: NotificationTypes.ERROR
        }))
    }
}

export const deleteUser = (id: string): UsersEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startDeleteUser())

    try {
        const response = await cmsApi.delete(`/users/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(deleteUserSucceeded(response.data))
        } else {
            dispatch(deleteUserFailed())
        }
    } catch (error) {
        dispatch(deleteUserFailed())
    }
}
