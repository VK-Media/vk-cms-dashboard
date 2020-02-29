import React from 'react'
import Container from 'react-bootstrap/Container'
import Login from './login/Login'

const App: React.FC = () => {
	return (
		<Container as="main" fluid={true}>
			<Login/>
		</Container>
	)
}

export default App
