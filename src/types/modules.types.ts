import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IState } from './redux/general.types'
import { NotificationsAction } from './redux/notifications.types'

export interface IModule {
    id: string
    name: string
    description: string
}

export interface IModulesState {
    modules: IModule[]
    loading: boolean
}

export interface IStartModules extends Action {
    type: 'startModules'
}

export interface IFetchModulesSuccess extends Action {
    type: 'fetchModulesSuccess',
    payload: IModule[]
}

export interface IModulesError extends Action {
    type: 'modulesError',
}

export type ModulesAction =
    NotificationsAction
    | IStartModules
    | IFetchModulesSuccess
    | IModulesError

export type ModulesEffect = ThunkAction<any, IState, any, ModulesAction>
