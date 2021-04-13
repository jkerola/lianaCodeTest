import React from 'react'
import { Container, CardGroup, Card } from 'react-bootstrap'

const News = () => {
  return (
    <Container fluid className='News-div'>
      <h4>Latest news</h4>
      <CardGroup>
        <Card>
          <Card.Title>Things</Card.Title>
        </Card>
      </CardGroup>
    </Container>
  )
}

export default News
