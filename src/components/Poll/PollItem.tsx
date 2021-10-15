import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
}

const PollContainer = styled.div`
  margin: 0.5rem 0;
  font-size: 20px;
`

const Label = styled.div`
  display: inline-block;
  width: 50%;
`

const PollItem: FC<Props> = ({ value }) => {
  return (
    <PollContainer>
      <Label>{value}</Label>
    </PollContainer>
  )
}

export default PollItem
