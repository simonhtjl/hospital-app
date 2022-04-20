import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  let user = JSON.parse(localStorage.getItem('user-info'))
  let dokter = JSON.parse(localStorage.getItem('dokter-info'))

  const navigate=useNavigate();

  function logout(){
    localStorage.clear();
    navigate("/")
  }

  const info = localStorage.getItem('user-info');

  return (
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">GLO DOC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          {info?
            <Nav className="me-auto">
              {
                localStorage.getItem('user-info')?
                <>
                  <Nav.Link href="/pasien">Registration</Nav.Link>
                </>
                :
                null        
              }
            </Nav>
            :
            <Nav className="me-auto">
              {
                localStorage.getItem('dokter-info')?
                <>
                  <Nav.Link href="/dokter/daftarpasien">Patient</Nav.Link>     
                  <Nav.Link href="/dokter/recordtreatment">Record Treatment</Nav.Link>      
                </>
                :
                null        
              }
          </Nav>
          }
          
          {info?
              <Nav>
                {
                  localStorage.getItem('user-info')?
                  <>
                        
                  </>
                    :
                  <>
                    <Nav.Link  href="/login">Login</Nav.Link>
                  </>         
                }          
              </Nav>
            :
              <Nav>
              {
                localStorage.getItem('dokter-info')?
                <>
                
                </>
                :
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>         
              }          
            </Nav>
          }

          
          {localStorage.getItem('user-info')?
            <Nav>
              <NavDropdown title={user[1]} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :null
          }

          {localStorage.getItem('dokter-info')?
            <Nav>
              <NavDropdown title={dokter[1]} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :null
          }

        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>

  )
}
