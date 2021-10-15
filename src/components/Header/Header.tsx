import { FC, useState } from 'react'
import styled from 'styled-components'
import ClassInput from './ClassInput'
import HeaderItem from './HeaderItem'
import LoginBtn from './LoginBtn'
import Logo from './Logo'
import SchoolSelect from './SchoolSelect'

interface Props {
  logged: boolean
  id?: string
  saveClass(clazz: string): void
  school: string
  setSchool(str: string): any
}

const Container = styled.div`
  width: 100%;
  background-color: #0000a3;
  height: 64px;
  line-height: 64px;
`

const InputSec = styled.div`
  float: right;
  margin-right: 20px;
`

const Header: FC<Props> = ({ saveClass, id, school, setSchool }) => {
  const filterId = (id?: string) => {
    if (!id || id.includes('-1')) return ''
    else return id
  }

  const [classNo, setClass] = useState(filterId(id))

  return (
    <Container>
      <Logo />

      <InputSec>
        {/* <HeaderItem to="/login" value="로그인" /> */}
        {/* <HeaderItem to="/help" value="Help" /> */}
        <>
          <HeaderItem to="/poll" value="평가하기" />
          <SchoolSelect school={school} setSchool={setSchool} />
          <ClassInput value={classNo} setValue={setClass} />
          <LoginBtn onClick={() => saveClass(classNo)} />
        </>
      </InputSec>
    </Container>
  )
}

export default Header
