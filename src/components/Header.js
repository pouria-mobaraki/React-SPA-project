import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pouria</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{marginLeft:35 , color:'#fff',textDecoration:'none'}}>Home</Link>
            <Link to="/courses" style={{marginLeft:35 , color:'#fff',textDecoration:'none'}}>Courses</Link>
            <Link to="/about" style={{marginLeft:35 , color:'#fff',textDecoration:'none'}}>About</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
