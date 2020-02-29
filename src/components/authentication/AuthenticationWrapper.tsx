import React, { PropsWithChildren } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { IState } from '../../types/redux/general.types'

interface IAuthenticationWrapperProps {
	jwt?: string
}
const AuthenticationWrapper: React.FC<PropsWithChildren<IAuthenticationWrapperProps>> = (props) => {
	return props.jwt && props.children ? <>{props.children}</> : <Redirect to={'/login'} />
}

const mapStateToProps = (state: IState) => {
	return {
		jwt: state.authentication.jwt
	}
}

export default connect(mapStateToProps)(AuthenticationWrapper)
