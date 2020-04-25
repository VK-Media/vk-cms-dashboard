import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container, Item } from 'vk-grid'

const Home = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Row>
                <Col xs={{ span: 5, offset: 1 }}>1</Col>
                <Col>2</Col>
            </Row>
            <Container space={5}>
                <Item xs={{ span: 5, offset: 1 }}>1</Item>
                <Item>2</Item>
            </Container>
        </>
    )
}

export default Home
