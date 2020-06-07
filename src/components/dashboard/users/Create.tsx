import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { createUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

const CreateUser: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: IState) => state.users.loading)
    const { t } = useTranslation()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(createUser({
            firstName, lastName, email, password
        }, history, t('/users')))
    }

    const renderLoader = () => {
        if (loading) {
            return <Spinner animation="border"/>
        }

        return null
    }

    return (
        <>
            <h1>{t('Create New User')}</h1>

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Widget.Heading text={t('General')}/>

                    <Container space={1}>
                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>{t('First Name')}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e: any) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </Item>

                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>{t('Last Name')}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={lastName}
                                    onChange={(e: any) => setLastName(e.target.value)}
                                />
                            </Form.Group>
                        </Item>

                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>{t('E-mail')}</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Item>

                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>{t('Password')}</Form.Label>
                                <Form.Control
                                    type="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Item>
                    </Container>
                </Widget>

                <Button variant="primary" type="submit">{t('Create')}</Button>
                {renderLoader()}
            </Form>
        </>
    )
}

export default CreateUser
