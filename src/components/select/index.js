import React, { useState } from 'react'
import { SelectBox, SelectHeader, Option } from './styled'
import { FiChevronDown } from 'react-icons/fi'

const Select = ({ array, width, placeholder, selected, setSelected }) => {
  const [active, setActive] = useState(false)
  return (
    <SelectBox width={width}>
      <SelectHeader onClick={() => setActive(!active)}>
        <p>{selected.role || placeholder}</p>
        <FiChevronDown />
      </SelectHeader>
      {active &&
        !!array.length &&
        array.map(i => (
          <Option
            onClick={() => {
              setSelected({...selected, role: i.name})
              setActive(false)
            }}
          >
            <p>{i.name}</p>
          </Option>
        ))}
    </SelectBox>
  )
}

export default Select
