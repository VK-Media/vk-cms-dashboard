import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { createSingleton } from '../../../redux/singletons/singletons.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

const CreateSingleton: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: IState) => state.singletons.loading)

    const [name, setName] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(createSingleton({
            name
        }, history))
    }

    const renderLoader = () => {
        if (loading) {
            return <Spinner animation="border"/>
        }

        return null
    }

    return (
        <>
            <h1>Create New Singleton</h1>

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Widget.Heading text="General"/>

                    <Container space={1}>
                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Item>
                    </Container>
                </Widget>

                <Button variant="primary" type="submit">Create</Button>
                {renderLoader()}
            </Form>
        </>
    )
}

export default CreateSingleton
