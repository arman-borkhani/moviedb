import { useQuery } from 'react-query'
import genres from '../data/genres'
import Genre from '../entities/Genre'
import apiClient from '../services/api-client'

interface FetchGenresResponse {
  genres: Genre[]
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient
        .get<FetchGenresResponse>('/genre/movie/list')
        .then((res) => res.data),
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
