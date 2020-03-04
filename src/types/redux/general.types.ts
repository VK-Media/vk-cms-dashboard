import { IAuthenticationState } from './authentication.types'
import { IDashboardState } from './dashboard.types'

export interface IState {
	authentication: IAuthenticationState
	dashboard: IDashboardState
}
