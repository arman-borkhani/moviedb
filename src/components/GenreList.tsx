import { Button, Flex, Typography } from 'antd'
import useGenres from '../hooks/useGenres'
import useMovieQueryStore from '../store/useMovieQueryStore'
import GenreListSkeleton from './GenreListSkeleton'

const GenreList = () => {
  const { genres, isLoading } = useGenres()
  const selectedGenreId = useMovieQueryStore((s) => s.movieQuery.genreId)
  const setSelectedGenreId = useMovieQueryStore((s) => s.setGenreId)

  return (
    <>
      <Typography.Title level={3}>Genre</Typography.Title>

      {isLoading && <GenreListSkeleton />}

      <Flex wrap gap="small">
        {genres.map((genre) => (
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
