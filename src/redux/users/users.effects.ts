import cmsApi from '../../apis/cms.api'
import { IState } from '../../types/redux/general.types'
import { IUserInput, UsersEffect } from '../../types/redux/users.types'
import {
    createUserFailed,
    createUserSucceeded, deleteUserFailed, deleteUserSucceeded,
    fetchSingleUserFailed,
    fetchSingleUserSucceeded,
    fetchUsersFailed,
    fetchUsersSucceeded,
    startCreateUser, startDeleteUser,
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
            dispatch(fetchUsersSucceeded(response.data))
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
        } else {
            dispatch(updateUserFailed())
        }
    } catch (error) {
        dispatch(updateUserFailed())
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
