import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

// need to import index.css to style the navbar
function Navigation() {
    return (
        <>
            <Navbar bg="bread" variant="light">
                <Container>
                    <Navbar.Brand>BreadCRUD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='new'>New</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


export default Navigation
