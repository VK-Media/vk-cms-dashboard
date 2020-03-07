import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { authenticationSucceeded } from '../redux/authentication/authentication.actions'
import { IState } from '../types/redux/general.types'
import { getTokenFromLocalStorage } from '../utils/authentication.utils'
import Dashboard from './dashboard/Dashboard'
import Frontend from './frontend/Frontend'

interface IAppProps {
    jwt?: string

    authenticationSucceeded(token: string): void
}

const App: React.FC<IAppProps> = ({ jwt, authenticationSucceeded }) => {
    useEffect(() => {
        const token = getTokenFromLocalStorage()

        if (token) {
            authenticationSucceeded(token)
        }
    }, [authenticationSucceeded])

    const renderApp = () => {
        if (jwt) {
            return <Dashboard/>
        }

        return <Frontend/>
    }

    return renderApp()
}

const mapStateToProps = (state: IState) => {
    return {
        jwt: state.authentication.jwt
    }
}

export default connect(mapStateToProps, { authenticationSucceeded })(App)
