import Movie from '../entities/Movie'
import useData from './useData'

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useMovies = () => {
  const { data, error, isLoading } =
    useData<FetchMoviesResponse>('/movie/popular')

  return {
    movies: data?.results || [],
    error,
    isLoading,
  }
}

export default useMovies
