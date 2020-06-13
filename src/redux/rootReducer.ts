import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authentication.reducer'
import collectionsReducer from './collections/collections.reducer'
import dashboardReducer from './dashboard/dashboard.reducer'
import mediaReducer from './media/media.reducer'
import modalReducer from './modal/modal.reducer'
import modulesReducer from './modules/modules.reducer'
import notificationsReducer from './notifications/notifications.reducer'
import singletonsReducer from './singletons/singletons.reducer'
import userGroupsReducer from './userGroups/userGroups.reducer'
import usersReducer from './users/users.reducer'

const reducer = combineReducers({
    authentication: authenticationReducer,
    collections: collectionsReducer,
    dashboard: dashboardReducer,
    media: mediaReducer,
    modal: modalReducer,
    modules: modulesReducer,
    notifications: notificationsReducer,
    singletons: singletonsReducer,
    userGroups: userGroupsReducer,
    users: usersReducer
})

export default reducer
