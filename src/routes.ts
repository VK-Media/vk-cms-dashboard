import React from 'react'

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'))
const Login = React.lazy(() => import('./components/login/Login'))
const Users = React.lazy(() => import('./components/users/Users'))

const routes = [
    { path: '/login', exact: true, component: Login },
    { path: '/dashboard', exact: true, component: Dashboard },
    { path: '/users', exact: true, component: Users }
]

export default routes
