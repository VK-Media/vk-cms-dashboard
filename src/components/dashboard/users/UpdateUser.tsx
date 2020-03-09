import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { updateUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { IUser, IUserInput, UsersEffect } from '../../../types/redux/users.types'
import Widget from '../../UI/widget/Widget'

interface ICreateUserProps {
    match?: {
        params: {
            id?: string
        }
    }
    loading: boolean
    error: boolean
    users?: IUser[]

    updateUser(input: IUserInput, id: string): UsersEffect
}

const UpdateUser: React.FC<ICreateUserProps> = ({ match, loading, error, users, updateUser }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (users) {
            const userToUpdate = users.find((user: IUser) => {
                return user._id === match?.params.id
            })

            if (userToUpdate) {
                if (userToUpdate.firstName) {
                    setFirstName(userToUpdate.firstName)
                }

                if (userToUpdate.lastName) {
                    setLastName(userToUpdate?.lastName)
                }

                setEmail(userToUpdate.email)
            }
        }
    }, [users, match])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            updateUser({ firstName, lastName, email }, match.params.id)
        }
    }

    const renderErrorMessage = () => {
        if (error) {
            return (
                <Alert variant="danger">Something went wrong, please try again</Alert>
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

    return (
        <>
            <h1>Update user</h1>

            {renderErrorMessage()}

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Row>
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
                    </Row>

                    <Row>
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
                    </Row>
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
        users: state.users.users
    }
}
export default connect(mapStateToProps, { updateUser })(UpdateUser)
