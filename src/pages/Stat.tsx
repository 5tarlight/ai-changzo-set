import { FC } from 'react'
import StatItem from '../components/Stat/StatItem'
import storedStat from '../stat/stat'
import styled from 'styled-components'
import hashHistory from '../hashHistory'

interface Props {}

const Container = styled.div`
  width: 500px;
  margin: 30px auto;
  background-color: skyblue;
  padding: 20px;
  border-radius: 5px;
  font-size: 22px;
`

const Button = styled.button`
  margin: 20px auto;
  font-size: 22px;
  padding: 5px;
`

const Stat: FC<Props> = () => {
  const keys = Object.keys(storedStat)
  const stats = keys.map((k, i) => {
    return (
      <StatItem
        txt={k}
        key={i}
        value={Math.round(storedStat[k].value * 10) / 10}
      />
    )
  })
  return (
    <Container>
      {stats}
      <Button
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          hashHistory.push('/graph')
        }}
      >
        그래프로 보기
      </Button>
    </Container>
  )
}

export default Stat
