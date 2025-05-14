import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import useUIStore from '../store/useUIStore'

const ThemeModeSwitch = () => {
  const toggleDarkMode = useUIStore((s) => s.toggleDarkMode)
  const darkMode = useUIStore((s) => s.darkMode)

  return (
    <Flex>
      <label className="cursor-pointer" htmlFor="darkModeCheckbox">
        {darkMode ? (
          <MoonOutlined style={{ fontSize: '20px' }} />
        ) : (
          <SunOutlined style={{ fontSize: '20px' }} />
        )}
      </label>

      <input
        className="w-0 h-0 opacity-0"
        onChange={toggleDarkMode}
        type="checkbox"
        id="darkModeCheckbox"
      />
    </Flex>
  )
}

export default ThemeModeSwitch
