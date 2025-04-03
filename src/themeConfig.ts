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
        bodyPadding: '1rem 0.75rem 1.5rem',
        borderRadiusLG: '0.75rem',
      },
    },
  }
}

export default themeConfig
