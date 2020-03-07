import { IAuthenticationState } from './authentication.types'
import { IDashboardState } from './dashboard.types'
import { IUserGroupsState } from './userGroups.types'
import { IUsersState } from './users.types'

export interface IState {
	authentication: IAuthenticationState
	dashboard: IDashboardState
	users: IUsersState
	userGroups: IUserGroupsState
}
