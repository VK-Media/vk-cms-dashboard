import React from 'react'

const Home = React.lazy(() => import('./components/dashboard/home/Home'))
const ListUsers = React.lazy(() => import('./components/dashboard/users/List'))
const CreateUser = React.lazy(() => import('./components/dashboard/users/Create'))
const UpdateUser = React.lazy(() => import('./components/dashboard/users/Update'))
const ListUserGroups = React.lazy(() => import('./components/dashboard/userGroups/List'))
const CreateUserGroups = React.lazy(() => import('./components/dashboard/userGroups/Create'))
const UpdateUserGroups = React.lazy(() => import('./components/dashboard/userGroups/Update'))
const ListSingletons = React.lazy(() => import('./components/dashboard/singletons/List'))
const CreateSingleton = React.lazy(() => import('./components/dashboard/singletons/Create'))
const UpdateSingleton = React.lazy(() => import('./components/dashboard/singletons/Update'))
const ListMedia = React.lazy(() => import('./components/dashboard/media/List'))
const ListCollections = React.lazy(() => import('./components/dashboard/collections/List'))
const CreateCollection = React.lazy(() => import('./components/dashboard/collections/Create'))
const UpdateCollection = React.lazy(() => import('./components/dashboard/collections/Update'))

export const dashboardRoutes = [
    { path: '/dashboard', exact: true, component: Home },
    { path: '/collections', exact: true, component: ListCollections },
    { path: '/collections/create', exact: true, component: CreateCollection },
    { path: '/collections/:id', exact: true, component: UpdateCollection },
    { path: '/users', exact: true, component: ListUsers },
    { path: '/users/create', exact: false, component: CreateUser },
    { path: '/users/:id', exact: false, component: UpdateUser },
    { path: '/user-groups', exact: true, component: ListUserGroups },
    { path: '/user-groups/create', exact: true, component: CreateUserGroups },
    { path: '/user-groups/:id', exact: true, component: UpdateUserGroups },
    { path: '/singletons', exact: true, component: ListSingletons },
    { path: '/singletons/create', exact: true, component: CreateSingleton },
    { path: '/singletons/:id', exact: true, component: UpdateSingleton },
    { path: '/media', exact: false, component: ListMedia }
]

const Login = React.lazy(() => import('./components/frontend/login/Login'))

export const frontendRoutes = [
    { path: '/login', exact: true, component: Login }
]
