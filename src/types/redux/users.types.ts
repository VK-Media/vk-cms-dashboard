import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './general.types'

export interface IUserGroupModel {
    _id: string
    name: string
    admin: boolean
    modules: string[]
}

export enum Languages {
    DANISH = 'DANISH',
    ENGLISH = 'ENGLISH'
}

export interface IUserSettings {
    language: Languages
}

export interface IUser {
    _id: string
    email: string
    password: string
    userGroups: IUserGroupModel[]
    firstName?: string
    lastName?: string
    settings: IUserSettings
}

export interface IUsersState {
    users?: IUser[]
    loading: boolean
    error: boolean
}

export interface IFetchUsersSucceeded extends Action {
    type: 'fetchUsersSucceeded'
    payload: IUser[]
}

export interface IStartFetchUsers extends Action {
    type: 'startFetchUsers'
}

export interface IFetchUsersFailed extends Action {
    type: 'fetchUsersFailed'
}

export type UsersAction = IFetchUsersSucceeded | IStartFetchUsers | IFetchUsersFailed

export type UsersEffect = ThunkAction<any, IState, any, UsersAction>
