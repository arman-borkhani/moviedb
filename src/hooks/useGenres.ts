import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import Genre from '../entities/Genre'
import apiClient from '../services/api-client'

interface FetchGenresResponse {
  genres: Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controler = new AbortController()

    setLoading(true)

    apiClient
      .get<FetchGenresResponse>('/genre/movie/list', {
        signal: controler.signal,
      })
      .then((res) => {
        setGenres(res.data.genres)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controler.abort()
  }, [])

  return { genres, error, isLoading }
}

export default useGenres
