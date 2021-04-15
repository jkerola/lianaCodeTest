import { React, useState, useEffect } from 'react'
import { Container, CardDeck, Row, Col } from 'react-bootstrap'
import NewsItem from './NewsItem'
import getNews from '../services/newsservice'

const News = () => {
  // Configure how many articles are displayed in page
  const articles = 4
  const [news, setNews] = useState(null)
  useEffect(() => {
    getNews()
      .then(response => {
        setNews(response.items)
      })
      .catch(() => {
        setNews([{
          pubDate: new Date(),
          title: 'Error fetching posts: JSON-server is likely not running'
        }])
      })
  }, [])
  return (
    <Container fluid className='News-div'>
      <h4 className='text-center mb-4 mt-4'>Latest news</h4>
      <CardDeck>
        <Row className='justify-content-center d-flex'>
          {news && news.slice(0, articles).map((item, i) =>
            <Col xs='auto' s='auto' md='auto' className='mb-4' key={i}>
              <NewsItem key={i} date={item.pubDate} title={item.title} />
            </Col>
          )}
        </Row>
      </CardDeck>
    </Container>
  )
}

export default News
