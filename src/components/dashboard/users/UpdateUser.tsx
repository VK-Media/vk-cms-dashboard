import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { fetchUserGroups } from '../../../redux/userGroups/userGroups.effects'
import { fetchSingleUser, updateUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { IUserGroup, UserGroupsEffect } from '../../../types/redux/userGroups.types'
import { IUser, IUserInput, Languages, UsersEffect } from '../../../types/redux/users.types'
import Widget from '../../UI/widget/Widget'

interface ICreateUserProps {
    match?: {
        params: {
            id?: string
        }
    }
    loading: boolean
    error: boolean
    userToUpdate?: IUser
    userGroups?: IUserGroup[]

    updateUser(input: IUserInput, id: string): UsersEffect

    fetchSingleUser(id: string): UsersEffect

    fetchUserGroups(): UserGroupsEffect
}

const UpdateUser: React.FC<ICreateUserProps> = ({
    match,
    loading,
    userToUpdate,
    updateUser,
    userGroups,
    fetchSingleUser,
    fetchUserGroups
}) => {
    const initialSelectedUserGroups: string[] = []

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [language, setLanguage] = useState(Languages.ENGLISH)
    const [selectedUserGroups, setSelectedUserGroups] = useState(initialSelectedUserGroups)

    useEffect(() => {
        if (match && match.params.id) {
            fetchSingleUser(match.params.id)
        }
    }, [match, fetchSingleUser])

    useEffect(() => {
        fetchUserGroups()
    }, [fetchUserGroups])

    useEffect(() => {
        if (userToUpdate) {
            if (userToUpdate.firstName) {
                setFirstName(userToUpdate.firstName)
            }

            if (userToUpdate.lastName) {
                setLastName(userToUpdate.lastName)
            }

            setEmail(userToUpdate.email)
            setLanguage(userToUpdate.settings.language)
            setSelectedUserGroups(userToUpdate.userGroups)
        }
    }, [userToUpdate])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            updateUser(
                { firstName, lastName, email, settings: { language }, userGroups: selectedUserGroups },
                match.params.id
            )
        }
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

    const renderLoader = () => {
        if (loading) {
            return <Spinner animation="border"/>
        }

        return null
    }

    return (
        <>
            <h1>Update user</h1>

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

                <Button variant="primary" type="submit">Update</Button>
                {renderLoader()}
            </Form>
        </>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        loading: state.users.loading,
        error: state.users.error,
        userToUpdate: state.users.userToUpdate,
        userGroups: state.userGroups.userGroups
    }
}
export default connect(mapStateToProps, { updateUser, fetchSingleUser, fetchUserGroups })(UpdateUser)
