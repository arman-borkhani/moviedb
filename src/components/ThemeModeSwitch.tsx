import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { ChangeEvent, useState } from 'react'

interface Props {
  onSelectMode: (value: boolean) => void
}

const ThemeModeSwitch = ({ onSelectMode }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSelectMode(event.target.checked)
    setIsChecked(event.target.checked)
  }

  return (
    <Flex>
      <label className="cursor-pointer" htmlFor="darkModeCheckbox">
        {isChecked ? (
          <MoonOutlined style={{ fontSize: '20px' }} />
        ) : (
          <SunOutlined style={{ fontSize: '20px' }} />
        )}
      </label>

      <input
        className="w-0 h-0 opacity-0"
        onChange={handleOnChange}
        type="checkbox"
        id="darkModeCheckbox"
      />
    </Flex>
  )
}

export default ThemeModeSwitch
