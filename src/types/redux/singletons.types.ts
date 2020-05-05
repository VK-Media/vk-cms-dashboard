import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './general.types'
import { NotificationsAction } from './notifications.types'

export interface ISingletonInput {
    name: string
}

export interface ISingleton {
    _id: string
    name: string
}

export interface IFetchSingletonsSuccess extends Action {
    type: 'fetchSingletonsSuccess'
    payload: { singletons: ISingleton[], count: number, append: boolean }
}

export interface IFetchSingletonSucceeded extends Action {
    type: 'fetchSingletonSucceeded'
    payload: ISingleton
}

export interface ICreateSingletonSucceeded extends Action {
    type: 'createSingletonSucceeded'
}

export interface IStartSingletonEffect extends Action {
    type: 'startSingletonEffect'
}

export interface ISingletonEffectError extends Action {
    type: 'singletonEffectError'
}

export interface IDeleteSingletonSuccess extends Action {
    type: 'deleteSingletonSuccess',
    payload: string
}

export interface ISingletonsState {
    singletons: ISingleton[]
    singletonToUpdate?: ISingleton
    loading: boolean
    count: number
}

export type SingletonsAction =
    NotificationsAction
    | IFetchSingletonsSuccess
    | IDeleteSingletonSuccess
    | ICreateSingletonSucceeded
    | IFetchSingletonSucceeded
    | IStartSingletonEffect
    | ISingletonEffectError

export type SingletonsEffect = ThunkAction<any, IState, any, SingletonsAction>
