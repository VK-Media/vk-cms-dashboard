import React from 'react'

const Home = React.lazy(() => import('./components/dashboard/home/Home'))
const ListUsers = React.lazy(() => import('./components/dashboard/users/ListUsers'))
const CreateUser = React.lazy(() => import('./components/dashboard/users/CreateUser'))
const UpdateUser = React.lazy(() => import('./components/dashboard/users/UpdateUser'))
const ListUserGroups = React.lazy(() => import('./components/dashboard/userGroups/ListUserGroups'))

export const dashboardRoutes = [
    { path: '/dashboard', exact: true, component: Home },
    { path: '/users', exact: true, component: ListUsers },
    { path: '/users/create', exact: false, component: CreateUser },
    { path: '/users/:id', exact: false, component: UpdateUser },
    { path: '/user-groups', exact: true, component: ListUserGroups }
]

const Login = React.lazy(() => import('./components/frontend/login/Login'))

export const frontendRoutes = [
    { path: '/login', exact: true, component: Login }
]
