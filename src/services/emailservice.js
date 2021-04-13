import axios from 'axios'

// point this toward backend responsible for storing email addresses
const baseURI = 'http://localhost:3001/subscribers'

// converts and submits email address to backend,
// returns promise for in-component error handling
const SubmitEmail = (email) => {
  const content = { emailAddress: email }
  return axios.post(baseURI, content)
}

export default SubmitEmail
