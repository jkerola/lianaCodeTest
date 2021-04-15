import React from 'react'
import { CardGroup } from 'react-bootstrap'
import BannerCard from './BannerCard'

const Cards = () => {
  return (
    <CardGroup className='mt-4 Cards-container'>
      <BannerCard
        text='Company'
        img='assets/left.JPEG'
      />
      <BannerCard
        text='Products'
        img='assets/middle.JPEG'
      />
      <BannerCard
      text='Contact us'
      img='assets/right.JPEG'
      />
    </CardGroup>
  )
}

export default Cards
