import { IMediaState } from '../media/media.types'
import { IAuthenticationState } from './authentication.types'
import { IDashboardState } from './dashboard.types'
import { INotificationsState } from './notifications.types'
import { ISingletonsState } from './singletons.types'
import { IUserGroupsState } from './userGroups.types'
import { IUsersState } from './users.types'

export interface IState {
    authentication: IAuthenticationState
    dashboard: IDashboardState
    users: IUsersState
    userGroups: IUserGroupsState
    notifications: INotificationsState,
    singletons: ISingletonsState
    media: IMediaState
}
