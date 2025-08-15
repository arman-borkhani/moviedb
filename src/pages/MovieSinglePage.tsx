import 'react-lazy-load-image-component/src/effects/blur.css'
import { useParams } from 'react-router'
import MoviePoster from '../components/MoviePoster'
import MovieSinglePageSkeleton from '../components/MovieSinglePageSkeleton'
import MovieAttributes from '../components/SingleMovie/MovieAttributes'
import MovieHeading from '../components/SingleMovie/MovieHeading'
import MovieOverview from '../components/SingleMovie/MovieOverview'
import MovieScore from '../components/SingleMovie/MovieScore'
import useMovie from '../hooks/useMovie'

const MovieSinglePage = () => {
  const { id } = useParams()
  const { movie, isLoading, error } = useMovie(id!)

  if (isLoading) return <MovieSinglePageSkeleton />

  if (error || !movie) throw error

  return (
    <div className="container">
      <div className="grid sm:grid-cols-12 gap-4 lg:gap-10">
        <div className="sm:col-span-6 md:col-span-5 xl:col-span-3">
          <MoviePoster movie={movie} />
        </div>

        <div className="sm:col-span-6 md:col-span-7 xl:col-span-9">
          <MovieHeading movie={movie} />

          <MovieScore movieVoteAverage={movie.vote_average} />

          <MovieOverview movieOverview={movie.overview} />

          <MovieAttributes movie={movie} />
        </div>
      </div>
    </div>
  )
}

export default MovieSinglePage
