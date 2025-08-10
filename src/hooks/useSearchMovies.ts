import APIClient from '../services/api-client'
import Movie from '../entities/Movie'
import { useQuery } from "react-query";
import ms from 'ms';

interface FetchMoviesResponse {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

const apiClient = new APIClient<FetchMoviesResponse>('/search/movie')

const useSearchMovies = (search:string) => (
  useQuery({
    queryKey: ["movies", search],
    queryFn: () =>
      apiClient.getAll({
        params: {
          query: search,
        },
      }),
    enabled: !!search,
    staleTime: ms('24h')
  })
)

export default useSearchMovies
