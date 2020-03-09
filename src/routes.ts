import React from 'react'

const Home = React.lazy(() => import('./components/dashboard/home/Home'))
const Users = React.lazy(() => import('./components/dashboard/users/Users'))
const CreateUser = React.lazy(() => import('./components/dashboard/users/CreateUser'))
const UpdateUser = React.lazy(() => import('./components/dashboard/users/UpdateUser'))
const UserGroups = React.lazy(() => import('./components/dashboard/userGroups/UserGroups'))

export const dashboardRoutes = [
    { path: '/dashboard', exact: true, component: Home },
    { path: '/users', exact: true, component: Users },
    { path: '/users/create', exact: false, component: CreateUser },
    { path: '/users/:id', exact: false, component: UpdateUser },
    { path: '/user-groups', exact: true, component: UserGroups }
]

const Login = React.lazy(() => import('./components/frontend/login/Login'))

export const frontendRoutes = [
    { path: '/login', exact: true, component: Login }
]
