import { useQuery } from 'react-query'
import Movie from '../entities/Movie'
import MovieQuery from '../entities/MovieQuery'
import APIClient from '../services/api-client'

const apiClient = new APIClient<FetchMoviesResponse>('/discover/movie')

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useMovies = (movieQuery: MovieQuery) => {
  const { data, error, isLoading } = useQuery<FetchMoviesResponse, Error>({
    queryKey: ['movies', movieQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genre?.id,
          sort_by: movieQuery.sortOrder,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  })

  return {
    movies: data?.results || [],
    error,
    isLoading,
  }
}

export default useMovies
