import Parser from 'rss-parser'

// liana RSS feed
// CORS prevents any requests to this URL,
// therefore for dev. purposes a local copy is required.
// const baseURL = 'https://www.lianatech.com/blog.rss'

// Swapped JSON-server index.html with a copy of blog.rss
const baseURL = 'http://localhost:3001'

const parser = new Parser()

const getNews = async () => {
  const response = await parser.parseURL(baseURL)
  return response
}

export default getNews
