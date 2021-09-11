import { FC } from 'react'
import styled from 'styled-components'
import { Id } from '../../App'

interface Props {
  id: Id
}

const Hello = styled.div`
  font-size: 60px;
`

const HelloWorld: FC<Props> = ({ id: { clazz, grade, no } }) => {
  const parseNum = (v: number) => {
    if (v < 10) return '0' + v
    else return '' + v
  }

  return (
    <Hello>
      {clazz === -1 || grade === -1 || no === -1
        ? '학번을 입력하세요.'
        : grade + parseNum(clazz) + parseNum(no)}
    </Hello>
  )
}

export default HelloWorld
