import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { remove as removeUserId } from "../slices/userIdSlice";
import { useRouter } from "next/router";

interface NavBarProps {
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
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userId.value);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={() => router.push("/courses/all")}>
        Massbuy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto" variant="tabs">
          {props.authenticated ? (
            <>
              <Nav.Link onClick={() => router.push("/cart")}>Cart</Nav.Link>
              {props.isAdmin && (
                <Nav.Link onClick={() => router.push("/users/all")}>
                  All users
                </Nav.Link>
              )}
              <NavDropdown title="Courses" id="courses-nav-dropdown">
                <NavDropdown.Item onClick={() => router.push("/courses/all")}>
                  List all
                </NavDropdown.Item>
                {props.isAdmin && (
                  <NavDropdown.Item
                    onClick={() => router.push("/courses/create")}
                  >
                    Create
                  </NavDropdown.Item>
                )}
                {userId === null ? (
                  "Loading..."
                ) : (
                  <NavDropdown.Item to={`/courses/user_courses/${userId}`}>
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
              <Nav.Link onClick={() => router.push("/login")}>Login</Nav.Link>
              <NavDropdown title="Register" id="register-nav-dropdown">
                <NavDropdown.Item onClick={() => router.push("/register/user")}>
                  As default user
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => router.push("/register/student")}
                >
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

export default NavBar;
