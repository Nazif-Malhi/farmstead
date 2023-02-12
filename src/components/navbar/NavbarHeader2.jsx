import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Logo2 } from "../../assets";


function NavScrollExample() {
    const style = {
        signin:{
            
        },
        createAccount:{
            backgroundColor:"#479528" ,
            border:"none"
        }
      };
  return (
    <Navbar fixed="top" expand="lg" style={{    zIndex: 99,width: '95%',height: '80px',top: '15px',left: '35px',backgroundColor:"#ffffff", borderRadius:"6px",boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
      <Container >
        <Navbar.Brand href="#">
            <div className="logo">
                <img src={Logo2} alt={"logo"}  style={{ width: '206px',marginLeft: '-75px'}}/>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" style={{width: '300px',justifyContent: 'space-around'}}>
            <Button  variant="outline-success" style={style.signin}>Sign In</Button>
            <Button style={style.createAccount}>Create New Account</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;