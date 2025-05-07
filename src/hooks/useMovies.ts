import { useQuery } from 'react-query'
import Movie from '../entities/Movie'
import MovieQuery from '../entities/MovieQuery'
import apiClient from '../services/api-client'

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
      apiClient
        .get<FetchMoviesResponse>('/discover/movie', {
          params: {
            with_genres: movieQuery.genre?.id,
            sort_by: movieQuery.sortOrder,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  })

  return {
    movies: data?.results || [],
    error,
    isLoading,
  }
}

export default useMovies
