import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { fetchUserGroups } from '../../../redux/userGroups/userGroups.effects'
import { createUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { IUserGroup, UserGroupsEffect } from '../../../types/redux/userGroups.types'
import { IUserInput, Languages, UsersEffect } from '../../../types/redux/users.types'
import Widget from '../../UI/widget/Widget'

interface ICreateUserProps {
    loading: boolean
    error: boolean
    userGroups?: IUserGroup[]

    createUser(input: IUserInput): UsersEffect

    fetchUserGroups(): UserGroupsEffect
}

const CreateUser: React.FC<ICreateUserProps> = ({ loading, error, userGroups, createUser, fetchUserGroups }) => {
    const initialSelectedUserGroups: string[] = []

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [language, setLanguage] = useState(Languages.ENGLISH)
    const [selectedUserGroups, setSelectedUserGroups] = useState(initialSelectedUserGroups)

    useEffect(() => {
        fetchUserGroups()
    }, [fetchUserGroups])

    const submitHandler = (e: any) => {
        e.preventDefault()
        createUser({ firstName, lastName, email, password, settings: { language }, userGroups: selectedUserGroups })
    }

    const renderErrorMessage = () => {
        if (error) {
            return (
                <Row>
                    <Col xl={{ span: 4, offset: 4 }}>
                        <Alert variant="danger">Something went wrong, please try again</Alert>
                    </Col>
                </Row>
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
            <h1>Create New User</h1>

            {renderErrorMessage()}

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Widget.Heading text="Personal Information"/>

                    <Form.Row>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e: any) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={lastName}
                                    onChange={(e: any) => setLastName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Widget>

                <Widget>
                    <Widget.Heading text="Settings"/>

                    <Form.Row>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Language</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={language}
                                    onChange={(e: any) => setLanguage(e.target.value)}
                                >
                                    <option value={Languages.ENGLISH}>English</option>
                                    <option value={Languages.DANISH}>Danish</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Widget>

                <Widget>
                    <Widget.Heading text="User Groups"/>

                    <Form.Row>
                        <Col lg={6}>
                            <Form.Group>
                                {renderUserGroupOptions()}
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Widget>

                <Button variant="primary" type="submit">Create</Button>
                {renderLoader()}
            </Form>
        </>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        loading: state.users.loading,
        error: state.users.error,
        userGroups: state.userGroups.userGroups
    }
}
export default connect(mapStateToProps, { createUser, fetchUserGroups })(CreateUser)
