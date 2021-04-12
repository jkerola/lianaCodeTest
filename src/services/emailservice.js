import axios from 'axios'

// point this toward backend responsible for storing email addresses
const baseURI = 'http://localhost:3001/subscribers'

// converts and submits email address to backend, returns backend response data
const SubmitEmail = (email) => {
  const content = { emailAddress: email }
  axios.post(baseURI, content)
    .then(response => {
      return response.data
    })
}

export default SubmitEmail
