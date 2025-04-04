import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import Movie from '../entities/Movie'
import apiClient from '../services/api-client'

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controler = new AbortController()

    setLoading(true)

    apiClient
      .get<FetchMoviesResponse>('/movie/popular', { signal: controler.signal })
      .then((res) => {
        setMovies(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controler.abort()
  }, [])

  return { movies, error, isLoading }
}

export default useMovies
