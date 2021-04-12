import { React, useState } from 'react'
import SubmitEmail from '../services/emailservice'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [visible, setVisible] = useState(false)
  // inline style that hides submission message until form is submitted
  const showOnResponse = visible ? { display: '' } : { display: 'none' }
  // form submission function
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('here')
    SubmitEmail(email)
    // display submission message for 4 seconds, then hide
    // TODO: error handling
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 4000)
    event.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Subscribe to our newsletter</h3>
        <p>Follow our story and get the latest promotional news about our products and events.</p>
        <div style={showOnResponse}>Email address submitted!</div>
        <input
          type='email'
          placeholder='Enter your email'
          required onChange={(e) => setEmail(e.target.value)}></input>
        <button type='submit'>Subscribe</button>
      </div>
    </form>
  )
}

export default Newsletter