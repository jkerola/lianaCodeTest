import { React, useState } from 'react'
import { Navbar, Nav, Form, FormControl, InputGroup, Button, Container } from 'react-bootstrap'

// component: Navbar with links and search bar
const Navigationbar = () => {
  const [search, setSearch] = useState('')
  // Search bar form submission handler
  const handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    console.log(search)
  }
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='#home'>
        <img
          src='assets/liana_logo.JPEG'
          className='d-inline-block align-top Navbar-logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href="#">Company</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Contact us</Nav.Link>
        </Nav>
        <Container className='col-md-4' />
        <Container className='col-md-4'>
          <Form className='' onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl onChange={(e) => setSearch(e.target.value)}
                type='text' placeholder='Search' required />
              <InputGroup.Append>
                <Button type='submit' className='Form-button' variant='success'>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar
