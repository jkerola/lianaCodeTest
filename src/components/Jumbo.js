import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ParallaxBanner } from 'react-scroll-parallax'

const Jumbo = () => {
  return (
    <Card border='light' className='Jumbo-div'>
      <ParallaxBanner expanded
        layers={[{
          image: 'assets/jumbotron.JPEG',
          amount: 0.3
        }]
        }
        style={{
          height: '50vh',
          width: 'auto'
        }}
      />
      <Card.ImgOverlay>
        <Card.Title
          className='Jumbo-text'>
          Software fueling digital marketing
        </Card.Title>
        <Button
          variant='success'
          href='#'
          className='Form-button Jumbo-button'>
          Learn more
        </Button>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Jumbo
