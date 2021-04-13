import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'

const Languagebar = () => {
  return (
    <Navbar fluid className='Language-bar'>
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
  )
}

export default Languagebar
