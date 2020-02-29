import cmsApi from '../../apis/cms.api'
import { AuthenticationEffect, ILoginInput } from '../../interfaces/authentication.interfaces'
import { IAuthenticationResponseData } from '../../types/redux/authentication.types'
import { authenticationFailed, authenticationSucceeded, startAuthentication } from './authentication.actions'

export const login = (loginInput: ILoginInput): AuthenticationEffect => async (dispatch) => {
	dispatch(startAuthentication())

	try {
		const response = await cmsApi.post('/auth/login', loginInput)

		if (response.status >= 200 && response.status < 300) {
			const data: IAuthenticationResponseData = response.data

			dispatch(authenticationSucceeded(data.jwt))
		} else {
			dispatch(authenticationFailed())
		}
	} catch (error) {
		dispatch(authenticationFailed())
	}
}
