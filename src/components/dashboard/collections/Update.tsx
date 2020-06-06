import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { match, RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { fetchCollection, updateCollection } from '../../../redux/collections/collections.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

interface IParams {
    id?: string
}

interface IUpdateCollectionProps extends RouteComponentProps {
    match: match<IParams>
}

const UpdateCollection: React.FC<IUpdateCollectionProps> = ({ match, history }) => {
    const dispatch = useDispatch()
    const collectionToUpdate = useSelector((state: IState) => state.collections.collectionToUpdate)
    const loading = useSelector((state: IState) => state.collections.loading)
    const [name, setName] = useState('')
    const { t } = useTranslation()

    useEffect(() => {
        if (match && match.params.id) {
            dispatch(fetchCollection(match.params.id))
        }
    }, [match, dispatch])

    useEffect(() => {
        if (collectionToUpdate) {
            if (collectionToUpdate.name) {
                setName(collectionToUpdate.name)
            }
        }
    }, [collectionToUpdate])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            dispatch(updateCollection(
                { name },
                match.params.id,
                history,
                t('/collections')
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
            <h1>{t('Update Collection')}</h1>

            <Form onSubmit={submitHandler}>
                <Widget>
                    <Widget.Heading text={t('General')}/>

                    <Container space={1}>
                        <Item lg={6}>
                            <Form.Group>
                                <Form.Label>{t('Name')}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)}
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

export default UpdateCollection
