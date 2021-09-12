import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './header.css';
import LogoutButton from './components/LogoutButton'
import { Nav } from "react-bootstrap";


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {/* <NavItem><Link to="/" className="nav-link">Home</Link></NavItem> */}
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}

        
        <Nav.Link>
        <Link to="/profile">Profile</Link>
        </Nav.Link>

        <Nav.Link>
        <LogoutButton/>
        </Nav.Link>
        
      </Navbar>
    )
  }
}

export default Header;
