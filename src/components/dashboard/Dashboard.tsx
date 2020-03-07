import React, { Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { dashboardRoutes } from '../../routes'
import DashboardLayout from '../layouts/Dashboard/DashboardLayout'

const Dashboard: React.FC = () => {
    const renderRoutes = () => {
        return dashboardRoutes.map(route => {
            return (<Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>)
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
