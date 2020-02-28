import React from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { login } from '../redux/authentication/authentication.effects'
import { IAuthenticationState } from '../types/redux/authentication.types'
import Login from './login/Login'

const App: React.FC = () => {
	return (
		<Container as="main" fluid={true}>
			<Login />
		</Container>
	)
}

const mapStateToProps = (state: IAuthenticationState) => {
	return {
		jwt: state.jwt
	}
}

export default connect(mapStateToProps, { login })(App)
