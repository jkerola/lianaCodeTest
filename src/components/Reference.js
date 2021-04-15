import React from 'react'
import PropTypes from 'react-proptypes'
import { Card, Container, Image } from 'react-bootstrap'

// component: reference card
const Reference = ({ img, title, body }) => {
  return (
    <Card className='References-card'>
      <Container className='References-card-image-div'>
        <Card.Img
          className='References-card-image'
          as={Image}
          src={img} />
      </Container>
      <Container className='References-card-text-div'>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          {body}
        </Card.Body>
      </Container>
    </Card>
  )
}

Reference.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
}

export default Reference
