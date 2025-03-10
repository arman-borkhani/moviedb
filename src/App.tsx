import { ConfigProvider, Layout } from 'antd'
import themeConfig from './themeConfig'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [themeMode] = useState<'light' | 'dark'>('light')
  return (
    <ConfigProvider theme={themeConfig(themeMode)}>
      <Layout className="h-screen flex flex-col">
        <Navbar />
        <Layout.Content className="grow"></Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
