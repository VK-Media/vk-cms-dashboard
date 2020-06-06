import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './redux/general.types'
import { NotificationsAction } from './redux/notifications.types'

export interface ICollectionInput {
    name: string
}

export interface ICollection {
    _id: string
    name: string
}

export interface IFetchCollectionsSuccess extends Action {
    type: 'fetchCollectionsSuccess'
    payload: { collections: ICollection[], count: number, append: boolean }
}

export interface IFetchCollectionSucceeded extends Action {
    type: 'fetchCollectionSucceeded'
    payload: ICollection
}

export interface ICreateCollectionSucceeded extends Action {
    type: 'createCollectionSucceeded'
}

export interface IStartCollectionEffect extends Action {
    type: 'startCollectionEffect'
}

export interface ICollectionEffectError extends Action {
    type: 'collectionEffectError'
}

export interface IDeleteCollectionSuccess extends Action {
    type: 'deleteCollectionSuccess',
    payload: string
}

export interface ICollectionsState {
    collections: ICollection[]
    collectionToUpdate?: ICollection
    loading: boolean
    count: number
}

export type CollectionsAction =
    NotificationsAction
    | IFetchCollectionsSuccess
    | IDeleteCollectionSuccess
    | ICreateCollectionSucceeded
    | IFetchCollectionSucceeded
    | IStartCollectionEffect
    | ICollectionEffectError

export type CollectionsEffect = ThunkAction<any, IState, any, CollectionsAction>
