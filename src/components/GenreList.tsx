import { Button, Flex, Typography } from 'antd'
import Genre from '../entities/Genre'
import useGenres from '../hooks/useGenres'
import GenreListSkeleton from './GenreListSkeleton'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenreId?: number
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { genres, isLoading } = useGenres()

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
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        ))}
      </Flex>
    </>
  )
}

export default GenreList
