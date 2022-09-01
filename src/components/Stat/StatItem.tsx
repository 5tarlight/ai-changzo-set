import { FC } from 'react'
import styled from 'styled-components'
import hashHistory from '../../hashHistory'

interface Props {
  txt: string
  value: number
}

const Container = styled.div`
  margin-bottom: 5px;
  /* cursor: pointer; */
`

const StatItem: FC<Props> = ({ txt, value }) => {
  return (
    <Container
    // onClick={e => {
    //   e.preventDefault()
    //   e.stopPropagation()
    //   hashHistory.push(`/graph/${txt}`)
    // }}
    >
      {txt} : {value}
    </Container>
  )
}

export default StatItem
