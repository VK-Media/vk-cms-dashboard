import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './general.types'
import { IAddNotification } from './notifications.types'

export interface ISingletonInput {
    name: string
}

export interface ISingleton {
    name: string
}

export interface IFetchSingletonsSucceeded extends Action {
    type: 'fetchSingletonsSucceeded'
    payload: ISingleton[]
}

export interface IFetchSingletonSucceeded extends Action {
    type: 'fetchSingletonSucceeded'
    payload: ISingleton
}

export interface ICreateSingletonSucceeded extends Action {
    type: 'createSingletonSucceeded'
}

export interface ISingletonsState {
    singletons: ISingleton[]
    singletonToUpdate?: ISingleton
}

export type SingletonsAction =
    IFetchSingletonsSucceeded
    | ICreateSingletonSucceeded
    | IAddNotification
    | IFetchSingletonSucceeded

export type SingletonsEffect = ThunkAction<any, IState, any, SingletonsAction>
