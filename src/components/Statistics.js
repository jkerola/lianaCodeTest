import { React } from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const Statistics = () => {
  return (
    <div>
      <CardGroup className='Statistics-div mt-4'>
        <Card border='light'>
          <div className='Statistics-clients'></div>
          <Card.Title>Clients</Card.Title>
        </Card>
        <Card border='light'>
          <div className='Statistics-employees'></div>
          <Card.Title>Employees</Card.Title>
        </Card>
        <Card border='light'>
          <div className='Statistics-users'></div>
          <Card.Title>Users</Card.Title>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Statistics
