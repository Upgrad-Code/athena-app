import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" color="dark" dark>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </NavItem> */}
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
