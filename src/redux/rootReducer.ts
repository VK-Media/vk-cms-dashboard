import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authentication.reducer'
import dashboardReducer from './dashboard/dashboard.reducer'
import languageReducer from './language/language.reducer'
import mediaReducer from './media/media.reducer'
import notificationsReducer from './notifications/notifications.reducer'
import singletonsReducer from './singletons/singletons.reducer'
import userGroupsReducer from './userGroups/userGroups.reducer'
import usersReducer from './users/users.reducer'

const reducer = combineReducers({
    authentication: authenticationReducer,
    dashboard: dashboardReducer,
    notifications: notificationsReducer,
    singletons: singletonsReducer,
    userGroups: userGroupsReducer,
    users: usersReducer,
    media: mediaReducer,
    language: languageReducer
})

export default reducer
