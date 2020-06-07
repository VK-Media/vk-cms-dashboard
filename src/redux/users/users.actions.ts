import {
    ICreateUserSucceeded,
    IDeleteUserSuccess,
    IFetchUsersSuccess,
    IFetchUserSucceeded,
    IUser,
    IUserEffectError,
    IStartUserEffect
} from '../../types/users.types'

export const fetchUsersSuccess = (
    users: IUser[],
    count: number,
    append: boolean
): IFetchUsersSuccess => ({
    type: 'fetchUsersSuccess',
    payload: { users, count, append }
})

export const fetchUserSucceeded = (user: IUser): IFetchUserSucceeded => ({
    type: 'fetchUserSucceeded',
    payload: user
})

export const createUserSucceeded = (): ICreateUserSucceeded => ({
    type: 'createUserSucceeded'
})

export const startUserEffect = (): IStartUserEffect => ({
    type: 'startUserEffect'
})

export const userEffectError = (): IUserEffectError => ({
    type: 'userEffectError'
})

export const deleteUserSuccess = (id: string): IDeleteUserSuccess => ({
    type: 'deleteUserSuccess',
    payload: id
})
