import Movie from '../entities/Movie'
import MovieQuery from '../entities/MovieQuery'
import useData from './useData'

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useMovies = (movieQuery: MovieQuery) => {
  const { data, error, isLoading } = useData<FetchMoviesResponse>(
    '/discover/movie',
    {
      params: {
        with_genres: movieQuery.genre?.id,
        sort_by: movieQuery.sortOrder,
      },
    },
    [movieQuery],
  )

  return {
    movies: data?.results || [],
    error,
    isLoading,
  }
}

export default useMovies
