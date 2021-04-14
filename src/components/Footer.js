import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

const Footer = () => {
  const iconSize = { fontSize: 30 }
  return (
    <footer className='Footer-div'>
      <Container>
        <Row>
          <Col>
            <h4>Liana Technologies</h4>
          </Col>
          <Col>
            <Container className='text-end'>
              <ul>
                <a className='Footer-link' href='#'>Company</a>
                <a className='Footer-link' href='#'>Products</a>
                <a className='Footer-link' href='#'>Contact Us</a>
                <a className='Footer-link' href='#'>News</a>
                <a className='Footer-link' href='#'>Intranet</a>
              </ul>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className='p-0'>
              Sales and Enquiries<br />
              Email: sales@lianatech.com <br />
              Phone: +358 10 387 7053
            </Container>
          </Col>
        <Col>
          <Container className='text-end'>
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
