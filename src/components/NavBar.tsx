import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { RouteComponentProps, withRouter, NavLink } from "react-router-dom";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { remove as removeUserId } from "../slices/userIdSlice";

interface NavBarProps extends RouteComponentProps<any> {
  authenticated: boolean;
  setAuthenticated(_b: boolean): void;
  isAdmin: boolean;
}

// const a = (term: string) =>
// new Promise((r) => {
//   props.history.push(`/search?term=${term}`);
//   r();
// })

const NavBar = (props: NavBarProps) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userId.value);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand to="/courses/all" as={NavLink}>
        Massbuy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto" variant="tabs">
          {props.authenticated ? (
            <>
              <Nav.Link to="/cart" as={NavLink}>
                Cart
              </Nav.Link>
              {props.isAdmin && (
                <Nav.Link to="/users/all" as={NavLink}>
                  All users
                </Nav.Link>
              )}
              <NavDropdown title="Courses" id="courses-nav-dropdown">
                <NavDropdown.Item to="/courses/all" as={NavLink}>
                  List all
                </NavDropdown.Item>
                {props.isAdmin && (
                  <NavDropdown.Item to="/courses/create" as={NavLink}>
                    Create
                  </NavDropdown.Item>
                )}
                {userId === null ? (
                  "Loading..."
                ) : (
                  <NavDropdown.Item
                    to={`/courses/user_courses/${userId}`}
                    as={NavLink}
                  >
                    My courses
                  </NavDropdown.Item>
                )}
              </NavDropdown>
              <Nav.Link
                onClick={() => {
                  props.setAuthenticated(false);
                  dispatch(removeUserId());
                }}
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link to="/login" as={NavLink}>
                Login
              </Nav.Link>
              <NavDropdown title="Register" id="register-nav-dropdown">
                <NavDropdown.Item to="/register/user" as={NavLink}>
                  As default user
                </NavDropdown.Item>
                <NavDropdown.Item to="/register/student" as={NavLink}>
                  As student
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Nav>
        {/* {!window.location.pathname.includes("/search") && (
          <SearchBar
            {...props}
            search={(term) =>
              new Promise<null>((r) => {
                props.history.push(`/search?term=${term}`);
                r(null);
              })
            }
          />
        )} */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
