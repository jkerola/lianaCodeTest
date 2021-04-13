import React from 'react'
import { Container } from 'react-bootstrap'
import Navigationbar from './components/Navigationbar'
import Languagebar from './components/Languagebar'
import Jumbo from './components/Jumbo'
import Cards from './components/Cards'
import Statistics from './components/Statistics'
import News from './components/News'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

// i18next for translation?
const App = () => {
  return (
    <Container fluid className='App-container'>
      <Languagebar />
      <Container>
        <Navigationbar />
      </Container>
      <Jumbo />
      <Container >
        <Cards />
        <Statistics />
      </Container>
      <News />
      <Container>
        <Newsletter />
      </Container>
      <Footer />
    </Container>
  )
}

export default App
