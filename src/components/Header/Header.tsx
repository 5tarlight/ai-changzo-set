import { FC } from 'react'
import styled from 'styled-components'
// import HeaderItem from './HeaderItem'
import Logo from './Logo'
import SchoolSelect from "./SchoolSelect";

interface Props {}

const Container = styled.div`
  width: 100%;
  background-color: #0000a3;
  height: 64px;
`

const Header: FC<Props> = () => {
  return (
    <Container>
      <Logo />

      {/* <HeaderItem to="/login" value="로그인" /> */}
      {/* <HeaderItem to="/help" value="Help" /> */}
      <SchoolSelect />
    </Container>
  )
}

export default Header
