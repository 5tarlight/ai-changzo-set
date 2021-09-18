import { FC } from 'react'
import styled from 'styled-components'
import School from '../../shcool/School'

interface Props {
  school: string
  setSchool(str: string): any
}

const Select = styled.select`
  display: inline-block;
`

const SchoolSelect: FC<Props> = ({ setSchool, school }) => {
  const Options = Object.values(School).map(({ code, name }, i) => {
    return (
      <option value={code} key={i} selected={code === school}>
        {name}
      </option>
    )
  })

  return (
    <Select
      defaultValue={school}
      onChange={e => {
        const {
          target: { value },
        } = e
        localStorage.setItem('school', value)
      }}
    >
      {Options}
    </Select>
  )
}

export default SchoolSelect
