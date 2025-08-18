import { Card, Skeleton, Space } from 'antd'

const MovieCardSkeleton = () => {
  return (
    <Card
      variant="borderless"
      cover={
        <Skeleton.Image
          style={{
            width: '100%',
            height: '18rem',
            borderTopLeftRadius: '0.75rem',
            borderTopRightRadius: '0.75rem',
          }}
          active
        />
      }
    >
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Skeleton.Input active block style={{ height: '1.5rem' }} />
        <Skeleton.Node active style={{ width: '5rem', height: '1.25rem' }} />
      </Space>
    </Card>
  )
}

export default MovieCardSkeleton
