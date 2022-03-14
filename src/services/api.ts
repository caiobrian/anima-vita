import Axios from 'axios'

export const api = Axios.create({
  baseURL: String(import.meta.env.VITE_API_HOST),
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  }
})
