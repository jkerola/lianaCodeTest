import React from 'react'
import { CardDeck, Row, Col, Container } from 'react-bootstrap'
import Reference from './Reference'

// component: collection of reference cards
const References = () => {
  return (
    <Container className='References-container'>
      <h3 className='text-center mb-4'>References</h3>
      <CardDeck className='References-carddeck'>
        <Row className='justify-content-center'>
          <Col xs='auto' s='auto' md='auto'>
            <Reference
              img='assets/bosch.JPEG'
              title='Robert Bosch'
              body='Bosch is a multinational engineering and electronics company.'
            />
          </Col>
          <Col xs='auto' s='auto' md='auto'>
            <Reference
              img='assets/bodyshop.JPEG'
              title='The Body Shop'
              body='The Body Shop is a global beauty brand with more
            than 3000 stores in over 60 countries.'
            />
          </Col>
          <Col xs='auto' s='auto' md='auto'>
            <Reference
              img='assets/laplandhotels.JPEG'
              title='Lapland Hotels'
              body='Lapland Hotels is the largest and most diverse hotel chain in Lapland.'
            />
          </Col>
          <Col xs='auto' s='auto' md='auto'>
            <Reference
              img='assets/ikea.JPEG'
              title='IKEA'
              body='IKEA is a multinational furniture store.'
            />
          </Col>
        </Row>
      </CardDeck>
    </Container>
  )
}

export default References
