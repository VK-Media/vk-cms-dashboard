import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { match, RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { useTranslation } from 'vk-i18n'
import { fetchSingleton, updateSingleton } from '../../../redux/singletons/singletons.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

interface IParams {
    id?: string
}

interface IUpdateSingletonProps extends RouteComponentProps {
    match: match<IParams>
}

const UpdateSingleton: React.FC<IUpdateSingletonProps> = ({ match, history }) => {
    const dispatch = useDispatch()
    const singletonToUpdate = useSelector((state: IState) => state.singletons.singletonToUpdate)
    const loading = useSelector((state: IState) => state.singletons.loading)
    const [name, setName] = useState('')
    const { t } = useTranslation()

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
                match.params.id,
                history
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
            <h1>{t('Update Singleton')}</h1>

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

export default UpdateSingleton
