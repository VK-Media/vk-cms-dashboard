import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Item } from 'vk-grid'
import { fetchSingleton, updateSingleton } from '../../../redux/singletons/singletons.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

interface IUpdateSingletonProps {
    match?: {
        params: {
            id?: string
        }
    }
}

const UpdateSingleton: React.FC<IUpdateSingletonProps> = ({ match }) => {
    const dispatch = useDispatch()
    const singletonToUpdate = useSelector((state: IState) => state.singletons.singletonToUpdate)

    const [name, setName] = useState('')

    useEffect(() => {
        if (match && match.params.id) {
            dispatch(fetchSingleton(match.params.id))
        }
    }, [match, dispatch])

    useEffect(() => {
        if (singletonToUpdate) {
            if (singletonToUpdate.name) {
                setName(singletonToUpdate.name)
            }
        }
    }, [singletonToUpdate])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            dispatch(updateSingleton(
                { name },
                match.params.id
            ))
        }
    }

    return (
        <>
            <h1>Update Singleton</h1>

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

                <Button variant="primary" type="submit">Update</Button>
            </Form>
        </>
    )
}

export default UpdateSingleton
