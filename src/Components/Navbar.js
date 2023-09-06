import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

// need to import index.css to style the navbar
function Navigation() {
    return (
        <>
            <Navbar id='navbar' bg="bread" variant="light">
                <Container>
                    <img src='https://www.eren.ch/cote/wp-content/uploads/sites/5/2020/04/bread_icon-icons.com_63160.png' height='40px' alt='cartoon bread logo'/>
                    <Navbar.Brand>BreadCRUD</Navbar.Brand>
                    <Nav className="me-auto" id='navbar-text'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/new'>New</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


export default Navigation
