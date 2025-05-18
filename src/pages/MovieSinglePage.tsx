import { Spin } from 'antd'
import { useParams } from 'react-router'
import useMovie from '../hooks/useMovie'

const MovieSinglePage = () => {
  const { id } = useParams()
  const { movie, isLoading, error } = useMovie(id!)

  if (isLoading) return <div className='container'><Spin /></div>

  if (error || !movie) throw error

  return (
    <div className="container">
      <div>{movie.title}</div>
    </div>
  )
}

export default MovieSinglePage
