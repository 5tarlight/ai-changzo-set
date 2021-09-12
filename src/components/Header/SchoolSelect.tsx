import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import School from '../../shcool/School'

interface Props {}

const Select = styled.select`
  display: inline-block;
`

const SchoolSelect: FC<Props> = () => {
  const [school, setSchool] = useState('')
  useEffect(() => {
    if (localStorage.getItem('school'))
      setSchool(localStorage.getItem('school') || 'HYUH')
  }, [])

  const Options = Object.values(School).map(({ code, name }, i) => {
    return (
      <option
        value={code}
        key={i}
        selected={code === school}
        onChange={e => {
          localStorage.setItem('school', code)
          setSchool(code)
        }}
      >
        {name}
      </option>
    )
  })

  return <Select>{Options}</Select>
}

export default SchoolSelect
