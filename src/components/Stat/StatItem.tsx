import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  txt: string
  value: number
}

const Container = styled.div`
  margin-bottom: 5px;
`

const StatItem: FC<Props> = ({ txt, value }) => {
  return (
    <Container>
      {txt} : {value}
    </Container>
  )
}

export default StatItem
