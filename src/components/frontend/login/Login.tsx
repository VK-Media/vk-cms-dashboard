import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    const renderErrorMessage = () => {
        if (error) {
            return (
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <Alert variant="danger">{t('The entered information is incorrect')}</Alert>
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
                        <h1 className="mt-5">{t('Login')}</h1>
                    </Item>
                </Container>
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <Alert variant="info">{t('Login to the dashboard by filling out the form below')}</Alert>
                    </Item>
                </Container>
                {renderErrorMessage()}
                <Container>
                    <Item xl={{ span: 4, offset: 4 }}>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>{t('Email Address')}</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder={t('Enter email')}
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>{t('Password')}</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder={t('Password')}
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">{t('Login')}</Button>
                            {renderLoader()}
                        </Form>
                    </Item>
                </Container>
            </>
        )
    }

    return jwt ? <Redirect to={t('/dashboard')}/> : renderLoginForm()
}

export default Login
