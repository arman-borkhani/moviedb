import { Button, Flex, Typography } from 'antd'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { genres } = useGenres()

  return (
    <>
      <Typography.Title level={3}>Genre</Typography.Title>
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
