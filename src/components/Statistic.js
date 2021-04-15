import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'react-proptypes'
import CountUp from 'react-countup'

const Statistic = ({ Icon, text, duration, number }) => {
  const iconSize = { fontSize: 60, color: 'green' }
  return (
    <Row >
      <Col xs={6} className='Statistics-icon-col'>
        <Icon style={iconSize} className='Statistics-icon' />
      </Col>
      <Col xs={6} className='Statistics-text-col'>
        <CountUp className='Statistics-number' end={number} duration={duration} /><br/>
        {text}
      </Col>
    </Row>
  )
}

Statistic.propTypes = {
  Icon: PropTypes.any,
  text: PropTypes.string,
  duration: PropTypes.number,
  number: PropTypes.number
}
export default Statistic
