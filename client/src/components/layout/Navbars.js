import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Navbars = props => {
  return (
    <Fragment>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://res.cloudinary.com/ebniecolo/image/upload/c_scale,h_100,w_130/v1577881554/ebniecolo_2020-02_a_vsfxah.jpg"
            width="120"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav activeKey="/">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Project</Nav.Link>
            <Nav.Link as={Link} to="/profs">Pro-Ecolo</Nav.Link>
            <Nav.Link as={Link} to="/produits">Produits</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

Navbars.propTypes = {};

export default Navbars;
