import { FC } from 'react'
import StatItem from '../components/Stat/StatItem'
import storedStat from '../stat/stat'
import styled from 'styled-components'

interface Props {}

const Container = styled.div`
  width: 500px;
  margin: 30px auto;
  background-color: skyblue;
  padding: 20px;
  border-radius: 5px;
  font-size: 22px;
`

const Stat: FC<Props> = () => {
  const keys = Object.keys(storedStat)
  const stats = keys.map((k, i) => {
    return <StatItem txt={k} value={Math.round(storedStat[k].value)} />
  })
  return <Container>{stats}</Container>
}

export default Stat
