import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { AuthenticationEffect, ILoginInput } from '../../interfaces/authentication.interfaces'
import { login } from '../../redux/authentication/authentication.effects'
import { IAuthenticationState } from '../../types/redux/authentication.types'

interface ILoginProps {
	login(input: ILoginInput): AuthenticationEffect
}

const Login: React.FC<ILoginProps> = ({ login }) => {
	useEffect(() => {
		login({email: 'robin@vkmedia.dk', password: 'test1234'})
	}, [login])

	return (
		<>
			<Row>
				<Col xl={{ span: 4, offset: 4 }}>
					<h1 className="mt-5">Login</h1>
				</Col>
			</Row>
			<Row>
				<Col xl={{ span: 4, offset: 4 }}>
					<Alert variant="info">
						Login to the dashboard by filling out the form below
					</Alert>
				</Col>
			</Row>
			<Row>
				<Col xl={{ span: 4, offset: 4 }}>
					<Form>
						<Form.Group controlId="formGroupEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="formGroupPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	)
}

const mapStateToProps = (state: IAuthenticationState) => {
	return {
		jwt: state.jwt
	}
}

export default connect(mapStateToProps, { login })(Login)
