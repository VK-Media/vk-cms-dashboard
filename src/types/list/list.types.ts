import { ThunkAction } from 'redux-thunk'
import { IState } from '../redux/general.types'
import { INotificationInput } from '../redux/notifications.types'

export interface IFetchListArguments {
    type: string
    limit: number
    offset: number
    append: boolean
    startAction: CallableFunction
    successAction: CallableFunction
    errorAction: CallableFunction
}

export interface IDeleteListItemArguments {
    id: string
    type: string
    startAction: CallableFunction
    errorAction: CallableFunction
    successAction: CallableFunction
    fetchSuccessAction: CallableFunction
    offset: number
    successNofitifcation: INotificationInput
    updateList: boolean
}

export type ListEffect = ThunkAction<any, IState, any, any>
