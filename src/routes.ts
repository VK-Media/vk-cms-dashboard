import React from 'react'

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Login = React.lazy(() => import('./components/login/Login'))

const routes = [
    { path: '/login', exact: true, component: Login },
    { path: '/dashboard', exact: true, component: Dashboard }
]

export default routes
