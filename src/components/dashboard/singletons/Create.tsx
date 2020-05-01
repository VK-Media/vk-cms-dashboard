import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { Container, Item } from 'vk-grid'
import { createSingleton } from '../../../redux/singletons/singletons.effects'
import Widget from '../../UI/widget/Widget'

const CreateSingleton: React.FC = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(createSingleton({
            name
        }))
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
            </Form>
        </>
    )
}

export default CreateSingleton
