import { useQuery } from 'react-query'
import Movie from '../entities/Movie'
import APIClient from '../services/api-client'

const apiClinet = new APIClient<Movie>('movie')

const useMovie = (id: string) =>
  useQuery({
    queryKey: ['movies', id],
    queryFn: () => apiClinet.get(id),
  })

export default useMovie
