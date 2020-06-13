import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { match, RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { fetchModulesItems } from '../../../redux/modules/modules.effects'
import { fetchUserGroup, updateUserGroup } from '../../../redux/userGroups/userGroups.effects'
import { IModule } from '../../../types/modules.types'
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
    const modules = useSelector((state: IState) => state.modules.modules)
    const { t } = useTranslation()

    const initialSelectedModules: string[] = []

    const [name, setName] = useState('')
    const [selectedModules, setSelectedModules] = useState(initialSelectedModules)

    useEffect(() => {
        dispatch(fetchModulesItems())
    }, [dispatch])

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

            if(userGroupToUpdate.modules){
                setSelectedModules(userGroupToUpdate.modules)
            }
        }
    }, [userGroupToUpdate])

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (match && match.params.id) {
            dispatch(updateUserGroup(
                { name, modules: selectedModules },
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

    const handleModulehange = (e: any) => {
        const isChecked = e.target.checked
        const moduleId = e.target.value

        if (isChecked) {
            setSelectedModules([...selectedModules, moduleId])
        } else {
            const newSelectedModules = [...selectedModules]
            const index = newSelectedModules.indexOf(moduleId)

            if (index > -1) {
                newSelectedModules.splice(index, 1)
            }

            setSelectedModules(newSelectedModules)
        }
    }

    const isModuleChecked = (value: string): boolean => {
        return selectedModules.indexOf(value) > -1
    }

    const renderModuleOptions = () => {
        if (modules) {
            return modules.map((module: IModule) => {
                return (
                    <Form.Check
                        value={module.id}
                        key={module.id}
                        label={t(module.name)}
                        checked={isModuleChecked(module.id)}
                        onChange={handleModulehange}
                    />
                )
            })
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

                <Widget>
                    <Widget.Heading text={t('Modules')}/>

                    <Container space={1}>
                        <Item lg={6}>
                            <Form.Group>
                                {renderModuleOptions()}
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
