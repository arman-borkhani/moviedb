import Genre from '../entities/Genre'
import Movie from '../entities/Movie'
import useData from './useData'

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useMovies = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<FetchMoviesResponse>(
    '/discover/movie',
    { params: { with_genres: selectedGenre?.id } },
    [selectedGenre?.id],
  )

  return {
    movies: data?.results || [],
    error,
    isLoading,
  }
}

export default useMovies
