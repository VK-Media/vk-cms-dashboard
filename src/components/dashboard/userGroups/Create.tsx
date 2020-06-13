import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Item } from 'vk-grid'
import { ReactComponent as InfoIcon } from '../../../icons/info-circle.svg'
import { fetchModulesItems } from '../../../redux/modules/modules.effects'
import { createUserGroup } from '../../../redux/userGroups/userGroups.effects'
import { IModule } from '../../../types/modules.types'
import { IState } from '../../../types/redux/general.types'
import Widget from '../../UI/widget/Widget'
import styles from './userGroups.module.scss'

const CreateUserGroup: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: IState) => state.userGroups.loading)
    const modules = useSelector((state: IState) => state.modules.modules)
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(fetchModulesItems())
    }, [dispatch])

    const initialSelectedModules: string[] = []

    const [name, setName] = useState('')
    const [selectedModules, setSelectedModules] = useState(initialSelectedModules)

    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(createUserGroup({
            name,
            modules: selectedModules
        }, history, t('/user-groups')))
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
                    <div className={styles['module-option']} key={module.id}>
                        <Form.Check
                            value={module.id}
                            id={module.id}
                            label={t(module.name)}
                            checked={isModuleChecked(module.id)}
                            onChange={handleModulehange}
                        />
                        <OverlayTrigger
                            placement="left"
                            overlay={<Popover content id={module.id}>{t(module.description)}</Popover>}
                        >
                            <InfoIcon/>
                        </OverlayTrigger>
                    </div>
                )
            })
        }

        return null
    }

    return (
        <>
            <h1>{t('Create New User Group')}</h1>

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

                <Button variant="primary" type="submit">{t('Create')}</Button>
                {renderLoader()}
            </Form>
        </>
    )
}

export default CreateUserGroup
