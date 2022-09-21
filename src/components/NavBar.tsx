import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mine Sweeper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/leader-board">Leader Board</Nav.Link>
            <Nav.Link href="/queryexample">Query Example</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
