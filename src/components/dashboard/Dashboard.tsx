import React, { Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { dashboardRoutes } from '../../routes'
import DashboardLayout from '../layouts/Dashboard/DashboardLayout'

const Dashboard: React.FC = () => {
    const { t } = useTranslation()

    const renderRoutes = () => {
        return dashboardRoutes.map(route => {
            return (<Route key={route.path} path={t(route.path)} component={route.component} exact={route.exact}/>)
        })
    }

    return (
        <BrowserRouter>
            <DashboardLayout>
                <Suspense fallback={<Spinner animation="border"/>}>
                    <Switch>
                        {renderRoutes()}
                    </Switch>
                </Suspense>
            </DashboardLayout>
        </BrowserRouter>
    )
}

export default Dashboard
