import { Layout as AntLayout, ConfigProvider, Typography } from 'antd'
import { isRouteErrorResponse, useRouteError } from 'react-router'
import Navbar from '../components/Navbar'
import useUIStore from '../store/useUIStore'
import themeConfig from '../themeConfig'

const ErrorPage = () => {
  const error = useRouteError()
  const darkMode = useUIStore((s) => s.darkMode)

  return (
    <ConfigProvider theme={themeConfig(darkMode ? 'dark' : 'light')}>
      <AntLayout style={{ minHeight: '100vh' }}>
        <Navbar />
        <AntLayout.Content className="grow py-10">
          <div className="container">
            <Typography.Title>Oops</Typography.Title>

            <Typography.Paragraph>
              {isRouteErrorResponse(error)
                ? 'This page does not exist.'
                : 'An unexpected error occurred.'}
            </Typography.Paragraph>
          </div>
        </AntLayout.Content>
      </AntLayout>
    </ConfigProvider>
  )
}

export default ErrorPage
