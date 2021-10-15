import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
}

const PollContainer = styled.div``

const Label = styled.div`
  font-size: 20px;
`

const PollItem: FC<Props> = ({ value }) => {
  return (
    <PollContainer>
      <Label>{value}</Label>
    </PollContainer>
  )
}

export default PollItem
