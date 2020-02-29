import produce from 'immer'

import { AuthenticationAction, IAuthenticationState } from '../../types/redux/authentication.types'

export const initialState: IAuthenticationState = {
	jwt: '',
	loading: false,
	error: false
}

const reducer = (state = initialState, action: AuthenticationAction) => {
	switch (action.type) {
		case 'startAuthentication':
			return produce(state, draft => {
				draft.loading = true
			})
		case 'authenticationFailed':
			return produce(state, draft => {
				draft.loading = false
				draft.error = true
			})
		case 'authenticationSucceeded':
			return produce(state, draft => {
				draft.jwt = action.payload
				draft.loading = false
				draft.error = false
			})
		default:
			return state
	}
}

export default reducer
