import { Button, Flex, Typography } from 'antd'
import Genre from '../entities/Genre'
import useGenres from '../hooks/useGenres'
import GenreListSkeleton from './GenreListSkeleton'

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, isLoading } = useGenres()

  return (
    <>
      <Typography.Title level={3}>Genre</Typography.Title>

      {isLoading && <GenreListSkeleton />}

      <Flex wrap gap="small">
        {genres.map((genre) => (
          <Button
            ghost
            size="middle"
            shape="round"
            variant="outlined"
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
