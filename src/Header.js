import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand></Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        
        <NavItem><Link to="./Profile" className="nav-link">Profile</Link></NavItem>
   
        
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        
        <NavItem><Link to="./LogoutButton" className="nav-link">Logout </Link></NavItem>
   
        
      </Navbar>
    )
  }
}

export default Header;
