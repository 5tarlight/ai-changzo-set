import { FC } from 'react'
import styled from 'styled-components'

const Hello = styled.div`
  font-size: 180px;
`

const HelloWorld: FC<{}> = () => {
  return <Hello>Hello World</Hello>
}

export default HelloWorld
