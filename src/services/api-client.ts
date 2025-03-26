import axios from 'axios'
const accessToken = import.meta.env.VITE_ACCESS_TOKEN

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: accessToken,
  },
})
