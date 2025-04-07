import { theme } from 'antd'

const themeConfig = (themeMode: 'light' | 'dark') => {
  return {
    algorithm:
      themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,

    token: {
      borderRadius: 2,
    },
    components: {
      Layout: {
        headerPadding: '0',
        headerBg: themeMode === 'light' ? '#fff' : '#001529',
      },
      Card: {
        bodyPadding: 20,
        borderRadiusLG: 12,
      },
    },
  }
}

export default themeConfig
