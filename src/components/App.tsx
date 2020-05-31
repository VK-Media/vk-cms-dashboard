import React, { useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticationSucceeded } from '../redux/authentication/authentication.actions'
import { IState } from '../types/redux/general.types'
import { getTokenFromLocalStorage } from '../utils/authentication.utils'
import styles from './App.module.scss'
import Dashboard from './dashboard/Dashboard'
import Frontend from './frontend/Frontend'
import Notifications from './UI/notifications/Notifications'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const jwt = useSelector((state: IState) => state.authentication.jwt)

    useEffect(() => {
        const token = getTokenFromLocalStorage()

        if (token) {
            dispatch(authenticationSucceeded(token))
        }
    }, [dispatch])

    const renderApp = () => {
        if (jwt) {
            return <Dashboard/>
        }

        return <Frontend/>
    }

    return (
        <Suspense fallback="loading...">
            <div className={styles.app}>
                <Notifications/>
                {renderApp()}
            </div>
        </Suspense>
    )
}

export default App
