import { verify } from 'jsonwebtoken'

export const saveTokenToLocalStorage = (token: string): boolean => {
    if (process.env.REACT_APP_JWT_SECRET && verify(token, process.env.REACT_APP_JWT_SECRET)) {
        localStorage.setItem('authenticationToken', token)

        return true
    }

    return false
}

export const getTokenFromLocalStorage = (): string | null => {
    const token = localStorage.getItem('authenticationToken')

    if (process.env.REACT_APP_JWT_SECRET && token && verify(token, process.env.REACT_APP_JWT_SECRET)) {
        return token
    }

    return null
}
