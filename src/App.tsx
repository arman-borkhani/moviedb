import { ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import themeConfig from './themeConfig'

const App = () => {
  const [themeMode] = useState<'light' | 'dark'>('light')

  return (
    <ConfigProvider theme={themeConfig(themeMode)}>
      <Layout className="h-screen flex flex-col">
        <Layout.Content className="grow"></Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
