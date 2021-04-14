import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'react-proptypes'

const NewsItem = ({ date, title }) => {
  // Regex for stripping [infographic] etc from titles
  const regex = /(\[.*?])/gm
  const formattedTitle = title.replace(regex, '')
  const formattedDate = new Date(date).toLocaleDateString()
  return (
    <Card className='News-card h-100'>
      <Card.Title className='News-card-date'>{formattedDate}</Card.Title>
      <Card.Body className='News-card-body'>
        <a href='#' className='News-card-link'>
        <Card.Text className='News-card-text'>
          {formattedTitle}
        </Card.Text>
        </a>
      </Card.Body>
    </Card>
  )
}

NewsItem.propTypes = {
  date: PropTypes.any,
  title: PropTypes.string
}

export default NewsItem
