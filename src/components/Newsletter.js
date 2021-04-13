import { React, useState } from 'react'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import submitEmail from '../services/emailservice'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [msgStyle, setMsgStyle] = useState('')
  const [visible, setVisible] = useState(false)
  // inline style that hides submission message until form is submitted
  const showOnResponse = visible
    ? { display: '' }
    : { display: 'none' }
  // form submission function
  const handleSubmit = (event) => {
    event.preventDefault()
    // async func returns server response to submission
    submitEmail(email).then(response => {
      if (response.status === 201) {
        setMessage(`Email ${email} succesfully subscribed!`)
        setMsgStyle('Newsletter-success')
      }
    }) // If any error occurs, set error style
      .catch(() => {
        setMessage('An error occurred while submitting email.')
        setMsgStyle('Newsletter-error')
      })

    // display message for 5 seconds, then hide
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 5000)
    event.target.reset()
  }
  return (
    <Form className='Newsletter-div' onSubmit={handleSubmit}>
      <h3>Subscribe to our newsletter</h3>
      <p>Follow our story and get the latest promotional news about our products and events.</p>
      <div className={msgStyle} style={showOnResponse}>{message}</div>
      <InputGroup>
        <FormControl
          type='email'
          placeholder='Enter your email'
          className='Newsletter-input'
          required onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup.Append>
          <Button
            variant='success'
            className='Form-button'
            type='submit'
          >
            Subscribe
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default Newsletter
