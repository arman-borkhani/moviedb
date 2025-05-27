import 'react-lazy-load-image-component/src/effects/blur.css'
import { useParams } from 'react-router'
import MovieAttributes from '../components/SingleMovie/MovieAttributes'
import MovieHeading from '../components/SingleMovie/MovieHeading'
import MovieOverview from '../components/SingleMovie/MovieOverview'
import MoviePoster from '../components/MoviePoster'
import MovieSinglePageSkeleton from '../components/MovieSinglePageSkeleton'
import useMovie from '../hooks/useMovie'

const MovieSinglePage = () => {
  const { id } = useParams()
  const { movie, isLoading, error } = useMovie(id!)

  if (isLoading) return <MovieSinglePageSkeleton />

  if (error || !movie) throw error

  return (
    <div className="container">
      <div className="grid sm:grid-cols-12 gap-4 lg:gap-10">
        <div className="sm:col-span-3">
          <MoviePoster posterPath={movie.poster_path} />
        </div>

        <div className="sm:col-span-9">
          <MovieHeading movie={movie} />

          <MovieOverview movieOverview={movie.overview} />

          <MovieAttributes movie={movie} />
        </div>
      </div>
    </div>
  )
}

export default MovieSinglePage
