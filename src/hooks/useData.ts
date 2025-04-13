import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controler = new AbortController()
    setLoading(true)

    apiClient
      .get<T>(endpoint, {
        signal: controler.signal,
      })
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controler.abort()
  }, [])

  return { data, error, isLoading }
}

export default useData
