import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  onClick(): void
}

const Button = styled.button``

const LoginBtn: FC<Props> = ({ onClick }) => {
  return <Button onClick={onClick}>로그인</Button>
}

export default LoginBtn
