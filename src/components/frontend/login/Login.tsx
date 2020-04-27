import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { login } from '../../../redux/authentication/authentication.effects'
import { IState } from '../../../types/redux/general.types'

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const jwt = useSelector((state: IState) => state.authentication.jwt)
    const error = useSelector((state: IState) => state.authentication.error)
    const loading = useSelector((state: IState) => state.authentication.loading)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    const renderErrorMessage = () => {
        if (error) {
            return (
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <Alert variant="danger">The entered information is incorrect</Alert>
                    </Item>
                </Container>
            )
        }

        return null
    }

    const renderLoader = () => {
        if (loading) {
            return <Spinner animation="border"/>
        }

        return null
    }

    const renderLoginForm = () => {
        return (
            <>
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <h1 className="mt-5">Login</h1>
                    </Item>
                </Container>
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <Alert variant="info">Login to the dashboard by filling out the form below</Alert>
                    </Item>
                </Container>
                {renderErrorMessage()}
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                            {renderLoader()}
                        </Form>
                    </Item>
                </Container>
            </>
        )
    }

    return jwt ? <Redirect to={'/dashboard'}/> : renderLoginForm()
}

export default Login
