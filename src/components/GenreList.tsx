import { Button, Flex, Typography } from 'antd'
import useGenres from '../hooks/useGenres'
import GenreListSkeleton from './GenreListSkeleton'

const GenreList = () => {
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
          >
            {genre.name}
          </Button>
        ))}
      </Flex>
    </>
  )
}

export default GenreList
