import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Wrapper from './dashboard';
var w = new Wrapper();

function NavHeader() {
    return (
        <div className="w-100">
            <Navbar className="w-100 navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <Container className="w-100">
                    <Navbar.Brand id="nav_home" href="#">Intelli Bulb</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link id="nav_profile" href={'/dashboard'}>Dashboard</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}


export default NavHeader;
