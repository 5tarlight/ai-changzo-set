import { FC } from 'react'
import styled from 'styled-components'

interface Props {}

const Input = styled.input``

const ClassInput: FC<Props> = () => {
  return <Input placeholder="학번" />
}

export default ClassInput
