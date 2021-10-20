import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  handleSubmit(): void
}

const Button = styled.button`
  margin-top: 10px;
  font-size: 22px;
`

const SubmitBtn: FC<Props> = ({ handleSubmit }) => {
  return <Button onClick={handleSubmit}>저장하기</Button>
}

export default SubmitBtn
