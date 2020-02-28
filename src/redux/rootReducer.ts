import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authentication.reducer'

const reducer = combineReducers({
	authentication: authenticationReducer
})

export default reducer
