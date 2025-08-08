import { Empty, Typography } from 'antd'
import MovieCard from '../components/MovieCard'
import useWatchlistStore from '../store/useWatchlistStore'

const WatchlistPage = () => {
  const { watchlist } = useWatchlistStore()

  return (
    <div className="container">
      <Typography.Title level={3}>
        Your Watchlist
      </Typography.Title>

      {watchlist.length === 0 ? (
        <Empty className="mt-40" description="No movies in your watchlist." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-5">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WatchlistPage
