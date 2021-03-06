import React, { Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { frontendRoutes } from '../../routes'
import FrontendLayout from '../layouts/Frontend/Frontend'

const Frontend: React.FC = () => {
    const { t } = useTranslation()

    const renderRoutes = () => {
        return frontendRoutes.map(route => {
            return (<Route key={route.path} path={t(route.path)} component={route.component} exact={route.exact}/>)
        })
    }

    return (
        <BrowserRouter>
            <FrontendLayout>
                <Suspense fallback={<Spinner animation="border"/>}>
                    <Switch>
                        {renderRoutes()}
                    </Switch>
                </Suspense>
            </FrontendLayout>
        </BrowserRouter>
    )
}

export default Frontend
