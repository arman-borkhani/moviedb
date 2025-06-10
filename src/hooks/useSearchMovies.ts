import ms from 'ms'
import { useInfiniteQuery } from 'react-query'
import Movie from '../entities/Movie'
import APIClient from '../services/api-client'
import useMovieQueryStore from '../store/useMovieQueryStore'

const apiClient = new APIClient<FetchMoviesResponse>('/search/movie')

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const useSearchMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery)

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<FetchMoviesResponse, Error>({
    queryKey: ['movies', movieQuery.searchText],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          query: movieQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined
    },
    staleTime: ms('24h'),
  })

  return {
    movies: data?.pages ?? [],
    totalResults: data?.pages[0]?.total_results || 0,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  }
}

export default useSearchMovies
