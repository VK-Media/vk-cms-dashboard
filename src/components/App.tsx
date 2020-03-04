import React, { Suspense, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { authenticationSucceeded } from '../redux/authentication/authentication.actions'
import routes from '../routes'
import { getTokenFromLocalStorage } from '../utils/authentication.utils'

interface IAppProps {
    authenticationSucceeded(token: string): void
}

const App: React.FC<IAppProps> = ({ authenticationSucceeded }) => {
    useEffect(() => {
        const token = getTokenFromLocalStorage()

        if (token) {
            authenticationSucceeded(token)
        }
    }, [authenticationSucceeded])

    const renderRoutes = () => {
        return routes.map(route => {
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

export default connect(null, { authenticationSucceeded })(App)
