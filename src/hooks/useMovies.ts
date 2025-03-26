import { useEffect, useState } from 'react'
import Movie from '../entities/Movie'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controler = new AbortController()

    apiClient
      .get<FetchMoviesResponse>('/movie/popular', { signal: controler.signal })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })

    return () => controler.abort()
  }, [])

  return { movies, error }
}

export default useMovies
