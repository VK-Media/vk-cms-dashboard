import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { createUser } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { IUserInput, UsersEffect } from '../../../types/redux/users.types'
import Widget from '../../UI/widget/Widget'

interface ICreateUserProps {
    loading: boolean
    error: boolean

    createUser(input: IUserInput): UsersEffect
}

const CreateUser: React.FC<ICreateUserProps> = ({ loading, error, createUser }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        createUser({ firstName, lastName, email, password })
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

    return (
        <>
            <h1>Create New User</h1>

            {renderErrorMessage()}

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Row>
                        <Col lg={6}>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e: any) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group controlId="formGroupLastName">
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
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
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
        error: state.users.error
    }
}
export default connect(mapStateToProps, { createUser })(CreateUser)
