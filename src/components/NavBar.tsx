import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { remove as removeUserId } from "../slices/userIdSlice";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavBarProps {
  authenticated: boolean;
  setAuthenticated(_b: boolean): void;
  isAdmin: boolean;
}

const NavBar = (props: NavBarProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userId.value);
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Link href="/courses/all" passHref>
          <Navbar.Brand>Massbuy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto" variant="tabs">
            {props.authenticated ? (
              <>
                <Link href="/cart" passHref>
                  <Nav.Link>Cart</Nav.Link>
                </Link>
                {props.isAdmin && (
                  <Link href="/users/all" passHref>
                    <Nav.Link>All users</Nav.Link>
                  </Link>
                )}
                <NavDropdown title="Courses" id="courses-nav-dropdown">
                  <Link href="/courses/all" passHref>
                    <NavDropdown.Item>List all</NavDropdown.Item>
                  </Link>
                  {props.isAdmin && (
                    <Link href="/courses/create" passHref>
                      <NavDropdown.Item>Create</NavDropdown.Item>
                    </Link>
                  )}
                  {userId === null ? (
                    "Loading..."
                  ) : (
                    <Link href={`/courses/user_courses/${userId}`} passHref>
                      <NavDropdown.Item>My courses</NavDropdown.Item>
                    </Link>
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
                  <NavDropdown.Item
                    onClick={() => router.push("/register/user")}
                  >
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
