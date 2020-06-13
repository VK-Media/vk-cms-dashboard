import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './redux/general.types'
import { NotificationsAction } from './redux/notifications.types'

export interface IUserGroupInput {
    name: string
    modules?: string[]
}

export interface IUserGroup {
    _id: string
    name: string
    modules?: string[]
}

export interface IFetchUserGroupsSuccess extends Action {
    type: 'fetchUserGroupsSuccess'
    payload: { userGroups: IUserGroup[], count: number, append: boolean }
}

export interface IFetchUserGroupSucceeded extends Action {
    type: 'fetchUserGroupSucceeded'
    payload: IUserGroup
}

export interface ICreateUserGroupSucceeded extends Action {
    type: 'createUserGroupSucceeded'
}

export interface IStartUserGroupEffect extends Action {
    type: 'startUserGroupEffect'
}

export interface IUserGroupEffectError extends Action {
    type: 'userGroupEffectError'
}

export interface IDeleteUserGroupSuccess extends Action {
    type: 'deleteUserGroupSuccess',
    payload: string
}

export interface IUserGroupsState {
    userGroups: IUserGroup[]
    userGroupToUpdate?: IUserGroup
    loading: boolean
    count: number
}

export type UserGroupsAction =
    NotificationsAction
    | IFetchUserGroupsSuccess
    | IDeleteUserGroupSuccess
    | ICreateUserGroupSucceeded
    | IFetchUserGroupSucceeded
    | IStartUserGroupEffect
    | IUserGroupEffectError

export type UserGroupsEffect = ThunkAction<any, IState, any, UserGroupsAction>
