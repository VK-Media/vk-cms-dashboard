import { Action } from 'redux'

export interface IDashboardState {
    menuExpanded: boolean
}

export interface IToggleMenu extends Action {
    type: 'toggleMenu'
}

export type DashboardAction = IToggleMenu
