import ms from 'ms'
import { useInfiniteQuery } from 'react-query'
import Movie from '../entities/Movie'
import MovieQuery from '../entities/MovieQuery'
import APIClient from '../services/api-client'

const apiClient = new APIClient<FetchMoviesResponse>('/discover/movie')

interface FetchMoviesResponse {
  results: Movie[]
  page: number
}

const useMovies = (movieQuery: MovieQuery) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<FetchMoviesResponse, Error>({
    queryKey: ['movies', movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genreId,
          sort_by: movieQuery.sortOrder,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined
    },
    staleTime: ms('24h'),
  })

  return {
    movies: data?.pages || [],
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  }
}

export default useMovies
