import { FC } from 'react'
import styled from 'styled-components'

interface Props {}

const Button = styled.button`
  margin-top: 10px;
  font-size: 22px;
`

const SubmitBtn: FC<Props> = () => {
  return <Button>저장하기</Button>
}

export default SubmitBtn
