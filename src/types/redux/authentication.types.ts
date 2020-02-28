import { Action } from 'redux'

export interface IAuthenticationState {
	jwt?: string
	loading: boolean
	error: boolean
}

export interface IAuthenticationResponseData {
	jwt: string
}

export interface IAuthenticationSucceeded extends Action {
	type: 'authenticationSucceeded'
	payload: string
}

export interface IStartAuthentication extends Action {
	type: 'startAuthentication'
}

export interface IAuthenticationFailed extends Action {
	type: 'authenticationFailed'
}

export type AuthenticationAction =
	IAuthenticationSucceeded
	| IStartAuthentication
	| IAuthenticationFailed
