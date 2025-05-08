import { useQuery } from 'react-query'
import genres from '../data/genres'
import Genre from '../entities/Genre'
import APIClient from '../services/api-client'

const apiClient = new APIClient<FetchGenresResponse>('/genre/movie/list')

interface FetchGenresResponse {
  genres: Genre[]
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  })

  return {
    genres: data?.genres || [],
    error,
    isLoading,
  }
}

export default useGenres
