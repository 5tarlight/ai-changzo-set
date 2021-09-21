import { FC, useState } from 'react'
import styled from 'styled-components'
import { getToday } from '../../time/times'

interface Props {}

const Container = styled.div`
  font-size: 24px;
`

const Clock: FC<Props> = () => {
  const initialDate = new Date()
  const date = `${initialDate.getFullYear()}.${
    initialDate.getMonth() + 1
  }.${initialDate.getDate()}`

  const [time, setTime] = useState(
    `${initialDate.getHours()}:${initialDate.getMinutes()}:${initialDate.getSeconds()}`
  )

  setInterval(() => {
    const date = new Date()
    setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  }, 1000)

  return (
    <>
      <Container>
        {date} {time} ({getToday()})
      </Container>
    </>
  )
}

export default Clock
