import React from 'react'
import { Card, CardGroup, Image } from 'react-bootstrap'

const Cards = () => {
  return (
    <CardGroup className='mt-4 Cards-container'>
      <Card border='light' className='text-white Cards'>
        <Card.Img className='Cards-img img-responsive'
          as={Image}
          src='../assets/left.JPEG'
        />
        <Card.ImgOverlay className='Cards-img-overlay'>
          <Card.Title className='Cards-text'>Company</Card.Title>
        </Card.ImgOverlay>
      </Card >
      <Card border='light' className='text-white Cards'>
        <Card.Img className='Cards-img img-responsive'
          as={Image}
          src='../assets/middle.JPEG'
        />
        <Card.ImgOverlay className='Cards-img-overlay'>
          <Card.Title className='Cards-text'>Products</Card.Title>
        </Card.ImgOverlay>
      </Card >
      <Card border='light' className='text-white Cards'>
        <Card.Img className='Cards-img img-responsive'
          as={Image}
          src='../assets/right.JPEG'
        />
        <Card.ImgOverlay className='Cards-img-overlay'>
          <Card.Title className='Cards-text'>Contact us</Card.Title>
        </Card.ImgOverlay>
      </Card >
    </CardGroup >
  )
}

export default Cards
