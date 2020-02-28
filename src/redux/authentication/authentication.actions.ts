import {
	IAuthenticationFailed,
	IAuthenticationSucceeded,
	IStartAuthentication
} from '../../types/redux/authentication.types'

export const authenticationSucceeded = (token: string): IAuthenticationSucceeded => ({
	type: 'authenticationSucceeded',
	payload: token
})

export const startAuthentication = (): IStartAuthentication => ({
	type: 'startAuthentication'
})

export const authenticationFailed = (): IAuthenticationFailed => ({
	type: 'authenticationFailed'
})
