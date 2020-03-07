import { IFetchUsersFailed, IFetchUsersSucceeded, IStartFetchUsers, IUser } from '../../types/redux/users.types'

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
