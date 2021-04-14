import React from 'react'
import { CardDeck, Container } from 'react-bootstrap'
import Reference from './Reference'

const References = () => {
  return (
    <Container className='References-container'>
      <h3 className='text-center mb-4'>References</h3>
      <CardDeck className='References-carddeck'>
        <Reference
          img='assets/bosch.JPEG'
          title='Robert Bosch'
          body='Bosch is a multinational engineering and electronics company.'
        />
        <Reference
          img='assets/bodyshop.JPEG'
          title='The Body Shop'
          body='The Body Shop is a global beauty brand with more
        than 3000 stores in over 60 countries.'
        />
        <Reference
          img='assets/laplandhotels.JPEG'
          title='Lapland Hotels'
          body='Lapland Hotels is the largest and most diverse hotel chain in Lapland.'
        />
        <Reference
          img='assets/ikea.JPEG'
          title='IKEA'
          body='IKEA is a multinational furniture store.'
        />
      </CardDeck>
    </Container>
  )
}

export default References
