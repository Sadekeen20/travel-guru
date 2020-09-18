import React from 'react';
import { Container,Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
           <Navbar variant="light" style={{background: 'transparent', paddingLeft:'100px'}}>
    <Navbar.Brand href="#home" >
        {/* <img
            alt=""
            src="../../Icon/Logo.png"
            width="30px"
            height="30px"
            className="d-inline-block align-top"
        />{'Travel Guru '} */}
       <Link to="/" style={{textDecoration: 'none' ,color: 'black'}}><b>T r a v e l Guru</b></Link>
    </Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
      
    </Form>
    <Nav className="mr-auto">
    
      <Nav.Link href="#features">News</Nav.Link>
      <Nav.Link href="#features">Destination</Nav.Link>
      <Nav.Link href="#features">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Link to="/login" style={{background:'#ffbf00', borderRadius:'5px',padding:'10px',color:'black',textDecoration: 'none'}}><b>Login</b>
      
      </Link>
    </Nav>
    
  </Navbar> 
  </Container>
    );
};

export default Header;