import { FC } from 'react'
import styled from 'styled-components'
import School from '../../shcool/School'

interface Props {}

const Select = styled.select`
  display: inline-block;
`

const SchoolSelect: FC<Props> = () => {
  const Options = Object.values(School).map(({ code, name }, i) => {
    return (
      <option value={code} key={i}>
        {name}
      </option>
    )
  })

  return <Select>{Options}</Select>
}

export default SchoolSelect
