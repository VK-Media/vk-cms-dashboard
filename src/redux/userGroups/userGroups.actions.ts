import {
    ICreateUserGroupSucceeded,
    IDeleteUserGroupSuccess,
    IFetchUserGroupsSuccess,
    IFetchUserGroupSucceeded,
    IUserGroup,
    IUserGroupEffectError,
    IStartUserGroupEffect
} from '../../types/userGroups.types'

export const fetchUserGroupsSuccess = (
    userGroups: IUserGroup[],
    count: number,
    append: boolean
): IFetchUserGroupsSuccess => ({
    type: 'fetchUserGroupsSuccess',
    payload: { userGroups, count, append }
})

export const fetchUserGroupSucceeded = (userGroup: IUserGroup): IFetchUserGroupSucceeded => ({
    type: 'fetchUserGroupSucceeded',
    payload: userGroup
})

export const createUserGroupSucceeded = (): ICreateUserGroupSucceeded => ({
    type: 'createUserGroupSucceeded'
})

export const startUserGroupEffect = (): IStartUserGroupEffect => ({
    type: 'startUserGroupEffect'
})

export const userGroupEffectError = (): IUserGroupEffectError => ({
    type: 'userGroupEffectError'
})

export const deleteUserGroupSuccess = (id: string): IDeleteUserGroupSuccess => ({
    type: 'deleteUserGroupSuccess',
    payload: id
})
