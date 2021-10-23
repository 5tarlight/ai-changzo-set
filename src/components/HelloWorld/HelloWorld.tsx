import { FC } from 'react'
import styled from 'styled-components'
import { Id } from '../../App'
import { isValidId } from '../../util'

interface Props {
  id: Id
}

const Hello = styled.div`
  font-size: 60px;
  margin-left: 20px;
`

const HelloWorld: FC<Props> = ({ id: { clazz, grade, no } }) => {
  const parseNum = (v: number) => {
    if (v < 10) return '0' + v
    else return '' + v
  }

  return (
    <Hello>
      {isValidId({ clazz, grade, no })
        ? grade + parseNum(clazz) + parseNum(no)
        : '학번을 입력하세요.'}
    </Hello>
  )
}

export default HelloWorld
