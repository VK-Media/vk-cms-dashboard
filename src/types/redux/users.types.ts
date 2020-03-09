import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './general.types'
import { IUserGroup } from './userGroups.types'

export interface IUserInput {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
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
    userGroups: IUserGroup[]
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

export interface IFetchSingleUserSucceeded extends Action {
    type: 'fetchSingleUserSucceeded'
    payload: IUser
}

export interface IStartFetchSingleUser extends Action {
    type: 'startFetchSingleUser'
}

export interface IFetchSingleUserFailed extends Action {
    type: 'fetchSingleUserFailed'
}

export interface ICreateUserSucceeded extends Action {
    type: 'createUserSucceeded'
    payload: IUser
}

export interface IStartCreateUser extends Action {
    type: 'startCreateUser'
}

export interface ICreateUserFailed extends Action {
    type: 'createUserFailed'
}

export interface IUpdateUserSucceeded extends Action {
    type: 'updateUserSucceeded'
    payload: IUser
}

export interface IStartUpdateUser extends Action {
    type: 'startUpdateUser'
}

export interface IUpdateUserFailed extends Action {
    type: 'updateUserFailed'
}

export interface IDeleteUserSucceeded extends Action {
    type: 'deleteUserSucceeded'
    payload: IUser
}

export interface IStartDeleteUser extends Action {
    type: 'startDeleteUser'
}

export interface IDeleteUserFailed extends Action {
    type: 'deleteUserFailed'
}

export type UsersAction =
    IFetchUsersSucceeded
    | IStartFetchUsers
    | IFetchUsersFailed
    | IFetchSingleUserSucceeded
    | IStartFetchSingleUser
    | IFetchSingleUserFailed
    | ICreateUserSucceeded
    | IStartCreateUser
    | ICreateUserFailed
    | IUpdateUserSucceeded
    | IStartUpdateUser
    | IUpdateUserFailed
    | IDeleteUserSucceeded
    | IStartDeleteUser
    | IDeleteUserFailed

export type UsersEffect = ThunkAction<any, IState, any, UsersAction>
