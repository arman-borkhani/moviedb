import { Card, Skeleton, Space } from 'antd'

const MovieCardSkeleton = () => {
  return (
    <Card
      variant="borderless"
      cover={
        <Skeleton.Image
          style={{
            width: '100%',
            height: 320,
            borderTopLeftRadius: '0.75rem',
            borderTopRightRadius: '0.75rem',
          }}
          active
        />
      }
    >
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Skeleton.Input active block style={{ height: '24px' }} />
        <Skeleton.Node active style={{ width: '80px', height: '20px' }} />
      </Space>
    </Card>
  )
}

export default MovieCardSkeleton
