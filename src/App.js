import React from 'react'
import { Container } from 'react-bootstrap'
import { ParallaxBanner } from 'react-scroll-parallax'
import Navigationbar from './components/Navigationbar'
import Languagebar from './components/Languagebar'
import Jumbo from './components/Jumbo'
import Cards from './components/Cards'
import Statistics from './components/Statistics'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

// i18next for translation?
const App = () => {
  return (
    <Container fluid className='App-container'>
      <Languagebar />
      <Navigationbar />
      <ParallaxBanner
        expanded
        layers={[{ image: 'assets/jumbotron.JPEG', amount: 0.3 }]}
      >
        <Jumbo />
      </ParallaxBanner>
      <Container >
        <Cards />
        <Statistics />
        <Newsletter />
        <Footer />
      </Container>
    </Container>
  )
}

export default App
