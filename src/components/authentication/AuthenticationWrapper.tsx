import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { IState } from '../../types/redux/general.types'

const AuthenticationWrapper: React.FC = (props) => {
    const jwt = useSelector((state: IState) => state.authentication.jwt)

    return jwt && props.children ? <>{props.children}</> : <Redirect to={'/login'}/>
}

export default AuthenticationWrapper
