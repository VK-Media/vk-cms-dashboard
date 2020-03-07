import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './general.types'

export interface IUserGroup {
    _id: string
    name: string
    admin: boolean
    modules: string[]
}

export interface IUserGroupsState {
    userGroups?: IUserGroup[]
    loading: boolean
    error: boolean
}

export interface IFetchUserGroupsSucceeded extends Action {
    type: 'fetchUserGroupsSucceeded'
    payload: IUserGroup[]
}

export interface IStartFetchUserGroups extends Action {
    type: 'startFetchUserGroups'
}

export interface IFetchUserGroupsFailed extends Action {
    type: 'fetchUserGroupsFailed'
}

export type UserGroupsAction = IFetchUserGroupsSucceeded | IStartFetchUserGroups | IFetchUserGroupsFailed

export type UserGroupsEffect = ThunkAction<any, IState, any, UserGroupsAction>
