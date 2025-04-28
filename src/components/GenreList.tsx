import { Button, Flex, Typography } from 'antd'
import Genre from '../entities/Genre'
import useGenres from '../hooks/useGenres'
import GenreListSkeleton from './GenreListSkeleton'

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            color={genre.id === selectedGenre?.id ? 'primary': 'default'}
            variant={genre.id === selectedGenre?.id ? 'solid': 'outlined'}
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
