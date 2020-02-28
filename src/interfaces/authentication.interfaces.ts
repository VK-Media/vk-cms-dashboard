import { ThunkAction } from 'redux-thunk'
import { AuthenticationAction, IAuthenticationState } from '../types/redux/authentication.types'

export interface ILoginInput {
	email: string
	password: string
}

export type AuthenticationEffect = ThunkAction<any, IAuthenticationState, any, AuthenticationAction>
