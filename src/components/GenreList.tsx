import { Button, Flex, Spin, Typography } from 'antd'
import useGenres from '../hooks/useGenres'
import useMovieQueryStore from '../store/useMovieQueryStore'

const GenreList = () => {
  const { data, isLoading } = useGenres()
  const selectedGenreId = useMovieQueryStore((s) => s.movieQuery.genreId)
  const setSelectedGenreId = useMovieQueryStore((s) => s.setGenreId)

  return (
    <>
      <Typography.Title level={3}>Genre</Typography.Title>

      {isLoading && <Spin />}

      <Flex wrap gap="small">
        {data?.genres.map((genre) => (
          <Button
            size="middle"
            shape="round"
            color={genre.id === selectedGenreId ? 'primary' : 'default'}
            variant={genre.id === selectedGenreId ? 'solid' : 'outlined'}
            key={genre.id}
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name}
          </Button>
        ))}
      </Flex>
    </>
  )
}

export default GenreList
