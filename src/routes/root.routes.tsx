import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'
import Login from '../components/login/Login'

const RootRoutes: React.FC = () => {
	return (
		<Router>
			<Route
				path={`/login`}
				exact={true}
				component={Login}
			/>
			<Route
				path={`/dashboard`}
				exact={true}
				component={Dashboard}
			/>
		</Router>
	)
}

export default RootRoutes
