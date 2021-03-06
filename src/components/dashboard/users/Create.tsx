import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { fetchListItems } from '../../../redux/list/list.effects'
import {
    fetchUserGroupsSuccess,
    startUserGroupEffect,
    userGroupEffectError
} from '../../../redux/userGroups/userGroups.actions'
import { createUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { Languages } from '../../../types/users.types'
import Widget from '../../UI/widget/Widget'

const CreateUser: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: IState) => state.users.loading)
    const userGroups = useSelector((state: IState) => state.userGroups.userGroups)
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(fetchListItems({
            type: 'userGroups',
            append: false,
            startAction: startUserGroupEffect,
            successAction: fetchUserGroupsSuccess,
            errorAction: userGroupEffectError,
            limit: 0,
            offset: 0
        }))
    }, [dispatch])

    const initialSelectedUserGroups: string[] = []

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [language, setLanguage] = useState(Languages.DANISH)
    const [selectedUserGroups, setSelectedUserGroups] = useState(initialSelectedUserGroups)

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(createUser({
            firstName,
            lastName,
            email,
            password,
            settings: { language },
            userGroups: selectedUserGroups
        }, history, t('/users')))
    }

    const renderLoader = () => {
        if (loading) {
            return <Spinner animation="border"/>
        }

        return null
    }

    const handleUserGroupChange = (e: any) => {
        const isChecked = e.target.checked
        const userGroupId = e.target.value

        if (isChecked) {
            setSelectedUserGroups([...selectedUserGroups, userGroupId])
        } else {
            const newSelectedUserGroups = [...selectedUserGroups]
            const index = newSelectedUserGroups.indexOf(userGroupId)

            if (index > -1) {
                newSelectedUserGroups.splice(index, 1)
            }

            setSelectedUserGroups(newSelectedUserGroups)
        }
    }

    const isUserGroupChecked = (value: string): boolean => {
        return selectedUserGroups.indexOf(value) > -1
    }

    const renderUserGroupOptions = () => {
        if (userGroups) {
            return userGroups.map(userGroup => {
                return (
                    <Form.Check
                        value={userGroup._id}
                        key={userGroup._id}
                        label={userGroup.name}
                        checked={isUserGroupChecked(userGroup._id)}
                        onChange={handleUserGroupChange}
                    />
                )
            })
        }

        return null
    }

    return (
        <>
            <h1>{t('Create New User')}</h1>

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Widget.Heading text={t('Personal Information')}/>

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
                    </Container>

                    <Container space={1}>
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
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                />
                            </Form.Group>
                        </Item>
                    </Container>
                </Widget>

                <Widget>
                    <Widget.Heading text={t('Settings')}/>

                    <Container space={1}>
                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>{t('Language')}</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={language}
                                    onChange={(e: any) => setLanguage(e.target.value)}
                                >
                                    <option value={Languages.DANISH}>{t('Danish')}</option>
                                    <option value={Languages.ENGLISH}>{t('English')}</option>
                                </Form.Control>
                            </Form.Group>
                        </Item>
                    </Container>
                </Widget>

                <Widget>
                    <Widget.Heading text={t('User Groups')}/>

                    <Container space={1}>
                        <Item lg={6}>
                            <Form.Group>
                                {renderUserGroupOptions()}
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
