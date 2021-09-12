import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
  setValue(str: string): void
}

const Input = styled.input`
  width: 50px;
`

const ClassInput: FC<Props> = ({ value, setValue }) => {
  const updateValue = (v: string) => {
    if (value.length === 0 && !(v === '1' || v === '2' || v === '3')) return
    const e = v.replace(/[^0-9]/g, '')
    setValue(e.slice(0, Math.min(5, e.length)))
  }

  // const append = (key: string) => {
  //   if (value.length === 5) return
  //   if (value.length === 0 && !(key === '1' || key === '2' || key === '3'))
  //     return
  //   setValue(value + key)
  // }
  // const remove = () => setValue(value.slice(0, value.length - 1))

  return (
    <Input
      placeholder="학번"
      value={value}
      onChange={({ target: { value } }) => {
        updateValue(value)
      }}
      // onChange={() => {}} // to disable devtool warning
      // onKeyDown={e => {
      //   const { key } = e
      //   const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      //   if (nums.includes(key)) append(key)
      //   else if (key == 'Backspace') remove()
      // }}
    />
  )
}

export default ClassInput
