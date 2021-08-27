import { FC } from 'react'
import styled from 'styled-components'
import Logo from './Logo'

interface Props {}

const Container = styled.div`
  width: 100%;
  background-color: blue;
  height: 64px;
`

const Header: FC<Props> = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header
