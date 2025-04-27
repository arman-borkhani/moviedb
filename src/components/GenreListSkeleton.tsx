import { Flex, Skeleton } from 'antd'

const GenreListSkeleton = () => {
  return (
    <Flex wrap gap="small">
      <Skeleton.Button
        style={{ width: '120px' }}
        shape="round"
        active
      ></Skeleton.Button>
      <Skeleton.Button shape="round" active></Skeleton.Button>
      <Skeleton.Button
        style={{ width: '160px' }}
        shape="round"
        active
      ></Skeleton.Button>
      <Skeleton.Button shape="round" active></Skeleton.Button>
      <Skeleton.Button
        style={{ width: '100px' }}
        shape="round"
        active
      ></Skeleton.Button>
      <Skeleton.Button
        style={{ width: '120px' }}
        shape="round"
        active
      ></Skeleton.Button>
      <Skeleton.Button
        style={{ width: '100px' }}
        shape="round"
        active
      ></Skeleton.Button>
      <Skeleton.Button shape="round" active></Skeleton.Button>
    </Flex>
  )
}

export default GenreListSkeleton
