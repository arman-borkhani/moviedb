import Genre from '../entities/Genre'
import useData from './useData'

interface FetchGenresResponse {
  genres: Genre[]
}

const useGenres = () => {
  const { data, error, isLoading } =
    useData<FetchGenresResponse>('/genre/movie/list')

  return {
    genres: data?.genres || [],
    error,
    isLoading,
  }
}

export default useGenres
