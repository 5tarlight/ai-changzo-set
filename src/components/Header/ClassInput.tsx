import { FC, useState } from 'react'
import styled from 'styled-components'

interface Props {}

const Input = styled.input`
  width: 50px;
`

const ClassInput: FC<Props> = () => {
  const [value, setValue] = useState('')

  const updateValue = (v: string) => {
    const e = v.replace(/[^0-9]/g, '')
    setValue(e.slice(0, 5))
  }

  return (
    <Input
      placeholder="학번"
      value={value}
      onChange={({ target: { value } }) => {
        updateValue(value)
      }}
    />
  )
}

export default ClassInput
