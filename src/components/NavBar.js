import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">React Ecommerce</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Product</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar