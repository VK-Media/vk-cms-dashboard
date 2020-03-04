import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authentication.reducer'
import dashboardReducer from './dashboard/dashboard.reducer'

const reducer = combineReducers({
	authentication: authenticationReducer,
	dashboard: dashboardReducer
})

export default reducer
