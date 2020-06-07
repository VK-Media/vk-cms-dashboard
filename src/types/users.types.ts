import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './redux/general.types'
import { NotificationsAction } from './redux/notifications.types'

export interface IUserInput {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface IUser {
    _id: string
    firstName: string
    lastName: string
    email: string
}

export interface IFetchUsersSuccess extends Action {
    type: 'fetchUsersSuccess'
    payload: { users: IUser[], count: number, append: boolean }
}

export interface IFetchUserSucceeded extends Action {
    type: 'fetchUserSucceeded'
    payload: IUser
}

export interface ICreateUserSucceeded extends Action {
    type: 'createUserSucceeded'
}

export interface IStartUserEffect extends Action {
    type: 'startUserEffect'
}

export interface IUserEffectError extends Action {
    type: 'userEffectError'
}

export interface IDeleteUserSuccess extends Action {
    type: 'deleteUserSuccess',
    payload: string
}

export interface IUsersState {
    users: IUser[]
    userToUpdate?: IUser
    loading: boolean
    count: number
}

export type UsersAction =
    NotificationsAction
    | IFetchUsersSuccess
    | IDeleteUserSuccess
    | ICreateUserSucceeded
    | IFetchUserSucceeded
    | IStartUserEffect
    | IUserEffectError

export type UsersEffect = ThunkAction<any, IState, any, UsersAction>
