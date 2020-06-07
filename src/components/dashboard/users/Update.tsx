import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { match, RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { fetchUser, updateUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

interface IParams {
    id?: string
}

interface IUpdateUserProps extends RouteComponentProps {
    match: match<IParams>
}

const UpdateUser: React.FC<IUpdateUserProps> = ({ match, history }) => {
    const dispatch = useDispatch()
    const userToUpdate = useSelector((state: IState) => state.users.userToUpdate)
    const loading = useSelector((state: IState) => state.users.loading)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { t } = useTranslation()

    useEffect(() => {
        if (match && match.params.id) {
            dispatch(fetchUser(match.params.id))
        }
    }, [match, dispatch])

    useEffect(() => {
        if (userToUpdate) {
            if (userToUpdate.firstName) {
                setFirstName(userToUpdate.firstName)
            }

            if (userToUpdate.lastName) {
                setLastName(userToUpdate.lastName)
            }

            if (userToUpdate.email) {
                setEmail(userToUpdate.email)
            }
        }
    }, [userToUpdate])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            dispatch(updateUser(
                { firstName, lastName, email, password },
                match.params.id,
                history,
                t('/users')
            ))
        }
    }

    const renderLoader = () => {
        if (loading) {
            return <Spinner animation="border"/>
        }

        return null
    }

    return (
        <>
            <h1>{t('Update User')}</h1>

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

                <Container>
                    <Button variant="primary" type="submit">{t('Update')}</Button>
                    {renderLoader()}
                </Container>
            </Form>
        </>
    )
}

export default UpdateUser
