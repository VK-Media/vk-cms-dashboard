import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { authenticationSucceeded } from '../redux/authentication/authentication.actions'
import RootRoutes from '../routes/root.routes'
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

    return (
        <Container as="main" fluid={true}>
            <RootRoutes/>
        </Container>
    )
}

export default connect(null, { authenticationSucceeded })(App)
