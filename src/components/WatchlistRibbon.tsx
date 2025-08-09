import { CheckOutlined, PlusOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import Movie from '../entities/Movie'
import useWatchlistStore from '../store/useWatchlistStore'

interface Props {
  movie: Movie
}

const WatchlistRibbon = ({ movie }: Props) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlistStore()
  const isInWatchlist = watchlist.some((m) => m.id === movie.id)
  const InnerIcon = isInWatchlist ? CheckOutlined : PlusOutlined

  return (
    <Tooltip
      title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      className={
        isInWatchlist ? '[&_.bg-ribbon]:fill-(--color-primary) stroke-none' : ''
      }
    >
      <div
        className="absolute top-0 left-0 w-8 h-12 hover:[&_.bg-hover]:opacity-50 cursor-pointer"
        onClick={() => {
          isInWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
        }}
      >
        <svg
          className="relative w-full h-auto transition-[strok] duration-200 ease-in-out"
          viewBox="0 0 24 34"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <polygon
            className="bg-ribbon fill-[rgba(31,31,31,0.75)] stroke-[hsla(0,0%,100%,0.08)]"
            points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
          ></polygon>
          <polygon
            className="bg-hover fill-[hsla(0,0%,100%,0.32)] opacity-0 transition-[opacity] duration-200 ease-in-out"
            points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
          ></polygon>
          <polygon
            className="bg-shadow fill-[rgba(0,0,0,0.32)]"
            points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
          ></polygon>
        </svg>

        <InnerIcon className="absolute left-1/2 -translate-x-1/2 top-3 text-white!" />
      </div>
    </Tooltip>
  )
}

export default WatchlistRibbon
