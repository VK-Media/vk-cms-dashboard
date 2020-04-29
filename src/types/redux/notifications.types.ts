import { Action } from 'redux'

export enum NotificationTypes {
    'DEFAULT',
    'INFO',
    'SUCCESS',
    'WARNING',
    'ERROR'
}

export interface INotification extends INotificationInput {
    id: string
    type: NotificationTypes
}

export interface INotificationInput {
    heading: string
    message: string
    type?: NotificationTypes
}

export interface INotificationsState {
    notifications: INotification[]
}

export interface IAddNotification extends Action {
    type: 'addNotification'
    payload: INotification
}

export interface IRemoveNotification extends Action {
    type: 'removeNotification'
    payload: string
}

export type NotificationsAction = IAddNotification | IRemoveNotification
