import ms from 'ms'
import { useQuery } from 'react-query'
import genres from '../data/genres'
import Genre from '../entities/Genre'
import APIClient from '../services/api-client'

const apiClient = new APIClient<FetchGenresResponse>('/genre/movie/list')

interface FetchGenresResponse {
  genres: Genre[]
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  })

export default useGenres
