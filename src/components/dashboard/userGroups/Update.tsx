import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { match, RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { fetchUserGroup, updateUserGroup } from '../../../redux/userGroups/userGroups.effects'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'

interface IParams {
    id?: string
}

interface IUpdateUserGroupProps extends RouteComponentProps {
    match: match<IParams>
}

const UpdateUserGroup: React.FC<IUpdateUserGroupProps> = ({ match, history }) => {
    const dispatch = useDispatch()
    const userGroupToUpdate = useSelector((state: IState) => state.userGroups.userGroupToUpdate)
    const loading = useSelector((state: IState) => state.userGroups.loading)
    const [name, setName] = useState('')
    const { t } = useTranslation()

    useEffect(() => {
        if (match && match.params.id) {
            dispatch(fetchUserGroup(match.params.id))
        }
    }, [match, dispatch])

    useEffect(() => {
        if (userGroupToUpdate) {
            if (userGroupToUpdate.name) {
                setName(userGroupToUpdate.name)
            }
        }
    }, [userGroupToUpdate])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            dispatch(updateUserGroup(
                { name },
                match.params.id,
                history,
                t('/user-groups')
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
            <h1>{t('Update User Group')}</h1>

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

export default UpdateUserGroup
