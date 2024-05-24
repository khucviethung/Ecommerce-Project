import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiSettings5Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <Navbar className="bg-body-tertiary" >
      <Container className='bg-warning' fluid > 
        <Navbar.Brand href="/homepage" className=""><FaHome /> Hung's Store</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"100px"}}>
          {/* content left */}
          <Nav  defaultActiveKey="/home" className='me-auto'>
            <Nav.Link to="/" href="homepage" eventKey="link-1">Home</Nav.Link>
            <Nav.Link to="product" href="product" eventKey="link-2">Product</Nav.Link>
            <Nav.Link to="link" href="homepage" eventKey="link-3">Link</Nav.Link>
          </Nav>

          {/* content right */}
          <Nav style={{marginRight:"100px"}}>
            <Nav.Link to="SignIn" href="SignIn" style={{backgroundColor:"white",color:"#00b14f",margin:"5px"}}> Sign In </Nav.Link>
            <Nav.Link to="SignUp" href="SignUp" style={{backgroundColor:"#00b14f",color:"#ffffff",margin:"5px"}}> Sign Up</Nav.Link>
            <Nav.Link to="ShoppingCart" href="ShoppingCart" style={{fontSize:"20px",margin:"5px",alignItems:"center"}}><FontAwesomeIcon icon={faBagShopping} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;