import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import SearchBar from "./SearchBar";

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand href="/">Massbuy</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/cart">
            <Nav.Link href="/cart">Cart</Nav.Link>
          </LinkContainer>
        </Nav>
        {!window.location.pathname.includes("/search") && (
          <SearchBar
            {...props}
            search={({ values }) => {
              props.history.push(`/search?term=${values.term}`);
            }}
          />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
