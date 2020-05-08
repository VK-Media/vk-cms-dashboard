import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from '../redux/general.types'
import { NotificationsAction } from '../redux/notifications.types'

export interface IMedia {
    name: string
    directory: boolean
    items?: number
    extension?: string
    baseName?: string
}

export interface IMediaState {
    media: IMedia[]
    loading: boolean
}

export interface IStartMedia extends Action {
    type: 'startMedia'
}

export interface IFetchMediaSuccess extends Action {
    type: 'fetchMediaSuccess',
    payload: IMedia[]
}

export interface IMediaError extends Action {
    type: 'mediaError',
}

export type MediaAction =
    NotificationsAction
    | IStartMedia
    | IFetchMediaSuccess
    | IMediaError

export type MediaEffect = ThunkAction<any, IState, any, MediaAction>
