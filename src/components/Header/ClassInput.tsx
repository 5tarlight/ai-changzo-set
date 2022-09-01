import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
  setValue(str: string): void
  handleSubmit(): void
}

const Input = styled.input`
  width: 50px;
  height: 30px;
`

const ClassInput: FC<Props> = ({ value, setValue, handleSubmit }) => {
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
      onKeyPress={({ key }) => {
        if (key === 'Enter') {
          handleSubmit()
        }
      }}
    />
  )
}
export default ClassInput
