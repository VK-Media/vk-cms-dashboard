import { IFetchUserGroupsFailed, IFetchUserGroupsSucceeded, IStartFetchUserGroups, IUserGroup } from '../../types/redux/userGroups.types'

export const fetchUserGroupsSucceeded = (userGroups: IUserGroup[]): IFetchUserGroupsSucceeded => ({
    type: 'fetchUserGroupsSucceeded',
    payload: userGroups
})

export const startFetchUserGroups = (): IStartFetchUserGroups => ({
    type: 'startFetchUserGroups'
})

export const fetchUserGroupsFailed = (): IFetchUserGroupsFailed => ({
    type: 'fetchUserGroupsFailed'
})
