import { Space, Typography } from 'antd'

interface Props {
  movieOverview: string | undefined
}

const MovieOverview = ({ movieOverview }: Props) => {
  if (!movieOverview) return null

  return (
    <Space direction="vertical" size="middle" className="mb-8">
      <Typography.Title level={5} style={{ margin: 0 }}>
        Overview
      </Typography.Title>

      <Typography.Text style={{ fontSize: '1rem' }}>
        {movieOverview}
      </Typography.Text>
    </Space>
  )
}

export default MovieOverview
