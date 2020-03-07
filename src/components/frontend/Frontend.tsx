import React, { Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { frontendRoutes } from '../../routes'

const Frontend: React.FC = () => {
    const renderRoutes = () => {
        return frontendRoutes.map(route => {
            return (<Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>)
        })
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner animation="border"/>}>
                <Switch>
                    {renderRoutes()}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Frontend
