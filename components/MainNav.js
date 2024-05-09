import React from "react";
import Link from "next/link";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MainNav() {
  const router = useRouter();
  return (
    <>
      <div className="container mx-50">
        <Navbar className="fixed-top navbar-light bg-white text-black">
          <Container className="mx-auto">
            <Navbar.Brand className="user-select-none text-black" href="/">
              Tomas Rochwerger
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="mx-auto">
                {/* <Link href="/projects" passHref legacyBehavior>
                  <Nav.Link className="m-2">Projects</Nav.Link>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                  <Nav.Link className="m-2">Contact</Nav.Link>
                </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

// Languages:
// - C
// - C++
// - Python
// - SQL, NoSQL

// Web Development:
// - HTML
// - CSS
// - JavaScript
// - React
// - Bootstrap
// - Node.js
// - Next.js
