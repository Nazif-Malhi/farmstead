// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Logo2 } from "../../assets";
import './navbarHeader2.css';
import { CustomButton } from "../button";
import { useNavigate } from "react-router";
import {Link} from 'react-scroll'
import { farmsteadlogo } from "../../assets";

function NavScrollExample(props) {
    
  const navigate = useNavigate();

  const route_to = (url) => {
    navigate(url);
  };

 

  return (
    <Navbar fixed="top" expand="lg" style={{    zIndex: 99,width: '95%',height: '80px',top: '15px',left: '35px',backgroundColor:"#ffffff", borderRadius:"6px",boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
      <Container >
        <Navbar.Brand
         href="farmstead"
         >
            <div className="logo">
                {/* <img src={Logo2} alt={"logo"}  style={{ width: '206px',marginLeft: '-75px'}}/> */}
                <img src={farmsteadlogo} alt={"logo"}  style={{ width: '70px',}}/>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto nav-container"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link 
              href="#action1" 
              className="nav-links"
              >
                Home
            </Nav.Link>
            <Nav.Link  className="nav-links"
            >
              Services
            </Nav.Link>
            <Nav.Link href="#action3" className="nav-links">Pricing</Nav.Link>
            <Nav.Link
            //  href="#action4" 
             className="nav-links"
            //  to="about_section" spy={true} smooth={true}  
             >
              <Link  to="aboutsection" spy={true} smooth={true}>About</Link>
            </Nav.Link>
            <Nav.Link href="#action5" className="nav-links">Blog</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled className="nav-links">
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex" style={{width: '355px',justifyContent: 'space-around'}}>
            {/* <Button  variant="outline-success" className='signin'>Sign In</Button>
            <Button variant="success" className='createAccount'>Create New Account</Button> */}
            <CustomButton type="outline border-fill"  
              width={"100px"}
              height="45px"
              style={{
                // color: '#209e2e ',
                fontWeight: '600',
                letterSpacing: '.7px'
              }}
              onClick={() => {
                route_to("authentication/login");
              }}>
              Sign In
            </CustomButton>
            <CustomButton type="filled" 
              width={"200px"}
              height="45px"
              style={{
                fontWeight: '600',
                letterSpacing: '.7px'
              }}
              onClick={() => {
                route_to("authentication/signup");
              }}
            >
              Create New Account
            </CustomButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;