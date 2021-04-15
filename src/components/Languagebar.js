import React from 'react'
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

// Component: navbar with links and dropdown menu
const Languagebar = () => {
  return (
    <Container fluid className='Language-bar-div'>
      <Container>
      <Navbar className='Language-bar'>
        <Nav className='mr-auto'>
          <Nav.Link href='#'>News</Nav.Link>
          <Nav.Link href='#'>Intranet</Nav.Link>
          <Form inline>
            <FormControl as='select'>
              <option>in English</option>
              <option>Suomeksi</option>
            </FormControl>
          </Form>
        </Nav>
      </Navbar>
      </Container>
    </Container>
  )
}

export default Languagebar
