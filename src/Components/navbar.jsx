import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
          <img src="/logooo.png" alt="" width={150} height={150} />
      <Navbar className="nav-link" bg="dark" data-bs-theme="dark">
        <Container style={{display:"flex", alignItems:"center", marginLeft:"20px"}} className="links ">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          
        </Container>
      </Navbar>
   </>
  );
}

export default ColorSchemesExample;
