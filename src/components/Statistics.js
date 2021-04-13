import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import FaceIcon from '@material-ui/icons/Face'
import PublicIcon from '@material-ui/icons/Public'
import Fade from 'react-reveal/Fade'

const Statistics = () => {
  const iconSize = { fontSize: 50 }
  return (
    <Container>
      <Fade>
        <Row className='Statistics-div'>
          <Col xs={12} s={4} md={4} className='align-self-start'>
            <Row>
              <Col xs={5} s={5} md={5} className='Statistics-icon-col'>
                <BusinessCenterIcon style={iconSize} className='Statistics-icon' />
              </Col>
              <Col className='Statistics-text-col'>
                <div className='Statistics-clients Statistics-number'></div>
                <h5>Clients</h5>
              </Col>
            </Row>
          </Col>
          <Col xs={12} s={4} md={4} className='align-self-middle'>
            <Row>
              <Col xs={5} s={5} md={5} className='Statistics-icon-col'>
                <FaceIcon style={iconSize} className='Statistics-icon' />
              </Col>
              <Col className='Statistics-text-col'>
                <div className='Statistics-employees Statistics-number'></div>
                <h5>Employees</h5>
              </Col>
            </Row>
          </Col>
          <Col xs={12} s={4} md={4} className='align-self-end'>
            <Row>
              <Col xs={5} s={5} md={5} className='Statistics-icon-col'>
                <PublicIcon style={iconSize} className='Statistics-icon' />
              </Col>
              <Col className='Statistics-text-col'>
                <div className='Statistics-users Statistics-number'></div>
                <h5>Users</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fade>
    </Container>
  )
}

export default Statistics
