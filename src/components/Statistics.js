import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Statistic from './Statistic'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import FaceIcon from '@material-ui/icons/Face'
import PublicIcon from '@material-ui/icons/Public'

const Statistics = () => {
  return (
    <Container>
        <Row className='Statistics-div'>
          <Col xs={0} s={1} md={1} />
          <Col xs={12} s={3} md={3} className='align-self-start'>
            <Statistic
              Icon={BusinessCenterIcon}
              text='Clients'
              number={3000}
              duration={5}
            />
          </Col>
          <Col xs={12} s={3} md={3} className='align-self-start'>
            <Statistic
              Icon={FaceIcon}
              text='Employees'
              number={180}
              duration={5}
            />
          </Col>
          <Col xs={12} s={3} md={3} className='align-self-start'>
            <Statistic
              Icon={PublicIcon}
              text='Users'
              number={10000}
              duration={5}
            />
          </Col>
        </Row>
    </Container>
  )
}

export default Statistics
