import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authentication.reducer'
import dashboardReducer from './dashboard/dashboard.reducer'
import userGroupsReducer from './userGroups/userGroups.reducer'
import usersReducer from './users/users.reducer'

const reducer = combineReducers({
    authentication: authenticationReducer,
    dashboard: dashboardReducer,
    users: usersReducer,
    userGroups: userGroupsReducer
})

export default reducer
