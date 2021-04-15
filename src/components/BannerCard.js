import React from 'react'
import { Card, Image } from 'react-bootstrap'
import PropTypes from 'react-proptypes'

// component: thumbnail card with link text on top
const BannerCard = ({ img, text }) => {
  return (
    <Card border='light' className='text-white Cards'>
      <Card.Img className='Cards-img img-responsive'
        as={Image}
        src={img}
      />
      <Card.ImgOverlay className='Cards-img-overlay'>
        <a href={`#${text}`} className='Cards-link stretched-link'>
          <Card.Title className='Cards-text'>{text}</Card.Title>
        </a>
      </Card.ImgOverlay>
    </Card >
  )
}

BannerCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
}

export default BannerCard
