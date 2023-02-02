import React,{useContext} from 'react';
import { Container , Navbar ,Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { CounterContext } from '../context/counterContext';

export default function MyNav() {

  let {count}= useContext(CounterContext);

  return (
    <Navbar className="myNav bg-secondary" expand="lg">
    <Container className="navbar-dark">
      <Navbar.Brand href="#form">User Dashboard ({count})</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className="nav-link fs-5 text-light" to="home">Home</NavLink>
          <NavLink className="nav-link fs-5 text-light" to="login">Login</NavLink>
          <NavLink className="nav-link fs-5 text-light" to="users">Users</NavLink>
          <NavLink className="nav-link fs-5 text-light" to="details">Details</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}