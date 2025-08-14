import { theme } from 'antd'

const themeConfig = (themeMode: 'light' | 'dark') => {
  return {
    algorithm:
      themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
    components: {
      Layout: {
        headerHeight: 'auto',
        headerPadding: '16px 0',
        headerBg: themeMode === 'light' ? '#fff' : '#001529',
      },
      Card: {
        bodyPadding: 16,
        borderRadiusLG: 12,
      },
      Button: {
        defaultGhostColor: themeMode === 'light' ? '#000' : '#fff',
        defaultGhostBorderColor: themeMode === 'light' ? '#9e9e9e' : '#424242',
      },
    },
  }
}

export default themeConfig
