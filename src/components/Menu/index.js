import React, {useState} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import {Link, useLocation} from "react-router-dom";

import paths from "../../config/paths";
import "./styles.scss";


function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  window.addEventListener("scroll", function (event) {
    let scrollY = this.scrollY;
    setScrollPosition(scrollY);
  });

  let {pathname} = useLocation();
  // Hide active class from Main page
  if (pathname === "/") pathname = null;

  return (
    <Navbar expand="md" className={scrollPosition > 0 ? "menu-navbar menu-navbar2" : "menu-navbar"}>
      <NavbarBrand className="brand" tag={Link} to="/">
        Dolphin
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {paths.map(value => (
              <NavItem key={value.name} className="link">
                <Link to={value.path} className={pathname === value.path ? "active" : ""}>{value.name}</Link>
              </NavItem>
            )
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;
