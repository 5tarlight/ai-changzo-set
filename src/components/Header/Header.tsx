import { FC } from 'react'
import styled from 'styled-components'

interface Props {}

const Container = styled.div`
  width: 100%;
  background-color: blue;
  height: 64px;
`

const Header: FC<Props> = () => {
  return <Container />
}

export default Header
