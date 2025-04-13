import { Col, ConfigProvider, Layout, Row } from 'antd'
import { useState } from 'react'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import themeConfig from './themeConfig'

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  const changeTheme = (value: boolean) => {
    setThemeMode(value ? 'dark' : 'light')
  }

  return (
    <ConfigProvider theme={themeConfig(themeMode)}>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar changeThemeMode={changeTheme} />
        <Layout.Content className="grow py-10">
          <div className="container">
            <Row gutter={24}>
              <Col xs={24} md={4}></Col>
              <Col xs={24} md={20}>
                <MovieGrid />
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
