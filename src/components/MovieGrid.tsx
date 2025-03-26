import { Typography } from 'antd'
import { useEffect, useState } from 'react'
import Movie from '../entities/Movie'
import apiClient from '../services/api-client'

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>('/movie/popular')
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message))
  })

  return (
    <>
      {error && <Typography.Text>{error}</Typography.Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default MovieGrid
