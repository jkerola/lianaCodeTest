import React from 'react'
import { Row, Col, Container, Navbar, Nav, Button } from 'react-bootstrap'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

// component: page footer with collapsing navbar
const Footer = () => {
  const iconSize = { fontSize: 30 }
  const linkColor = { color: 'white' }
  return (
    <footer className='Footer-div'>
      <Container>
        <Navbar className='Footer-navbar' variant='dark' expand='lg'>
          <Navbar.Brand href='#'>
            <h4 className='text-white'>Liana Technologies</h4>
          </Navbar.Brand>
          <Navbar.Toggle className='text-white' aria-controls='footer-navbar-nav'/>
          <Navbar.Collapse id='footer-navbar-nav' className='justify-content-end'>
            <Nav>
              <Nav.Link style={linkColor} className='Footer-link' href='#'>Company</Nav.Link>
              <Nav.Link style={linkColor} className='Footer-link' href='#'>Products</Nav.Link>
              <Nav.Link style={linkColor} className='Footer-link' href='#'>Contact</Nav.Link>
              <Nav.Link style={linkColor} className='Footer-link' href='#'>News</Nav.Link>
              <Nav.Link style={linkColor} className='Footer-link' href='#'>Intranet</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col xs={12} md='3' >
            <Container className='p-0 Footer-contact-text'>
              Sales and Enquiries<br />
              Email: sales@lianatech.com <br />
              Phone: +358 10 387 7053
            </Container>
          </Col>
          <Col xs='12' md='4'
          className='text-xs-center text-s-center text-md-start align-self-end'
          >
            <Button
            href='#'
            variant='success'
            className='form-button'
            >
              Contact us
            </Button>
          </Col>
          <Col xs='12' s='12' md='5' className='align-self-end pt-3'>
            <Container className='text-md-end text-lg-end text-center mt-xs-2 text-xs-center text-s-center justify-content-end p-0'>
              <ul>
                <a href='#Facebook'>
                  <FacebookIcon style={iconSize} className='Footer-icons Footer-link' />
                </a>
                <a href='#Twitter'>
                  <TwitterIcon style={iconSize} className='Footer-icons Footer-link' />
                </a>
                <a href='#LinkedIn'>
                  <LinkedInIcon style={iconSize} className='Footer-icons Footer-link' />
                </a>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}

export default Footer
