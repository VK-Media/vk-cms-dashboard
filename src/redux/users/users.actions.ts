import {
    ICreateUserFailed,
    ICreateUserSucceeded, IDeleteUserFailed, IDeleteUserSucceeded,
    IFetchSingleUserFailed,
    IFetchSingleUserSucceeded,
    IFetchUsersFailed,
    IFetchUsersSucceeded, IStartCreateUser, IStartDeleteUser, IStartFetchSingleUser,
    IStartFetchUsers, IStartUpdateUser, IUpdateUserFailed, IUpdateUserSucceeded,
    IUser
} from '../../types/redux/users.types'

export const fetchUsersSucceeded = (users: IUser[]): IFetchUsersSucceeded => ({
    type: 'fetchUsersSucceeded',
    payload: users
})

export const startFetchUsers = (): IStartFetchUsers => ({
    type: 'startFetchUsers'
})

export const fetchUsersFailed = (): IFetchUsersFailed => ({
    type: 'fetchUsersFailed'
})

export const fetchSingleUserSucceeded = (user: IUser): IFetchSingleUserSucceeded => ({
    type: 'fetchSingleUserSucceeded',
    payload: user
})

export const startFetchSingleUser = (): IStartFetchSingleUser => ({
    type: 'startFetchSingleUser'
})

export const fetchSingleUserFailed = (): IFetchSingleUserFailed => ({
    type: 'fetchSingleUserFailed'
})

export const createUserSucceeded = (user: IUser): ICreateUserSucceeded => ({
    type: 'createUserSucceeded',
    payload: user
})

export const startCreateUser = (): IStartCreateUser => ({
    type: 'startCreateUser'
})

export const createUserFailed = (): ICreateUserFailed => ({
    type: 'createUserFailed'
})

export const updateUserSucceeded = (user: IUser): IUpdateUserSucceeded => ({
    type: 'updateUserSucceeded',
    payload: user
})

export const startUpdateUser = (): IStartUpdateUser => ({
    type: 'startUpdateUser'
})

export const updateUserFailed = (): IUpdateUserFailed => ({
    type: 'updateUserFailed'
})

export const deleteUserSucceeded = (user: IUser): IDeleteUserSucceeded => ({
    type: 'deleteUserSucceeded',
    payload: user
})

export const startDeleteUser = (): IStartDeleteUser => ({
    type: 'startDeleteUser'
})

export const deleteUserFailed = (): IDeleteUserFailed => ({
    type: 'deleteUserFailed'
})
