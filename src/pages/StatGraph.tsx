import { FC } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import storedStat from '../stat/stat'

const Container = styled.div`
  width: 520px;
  margin: 120px auto 0 auto;
`

const StatGraph: FC = () => {
  const keys = Object.keys(storedStat)
  const data = keys.map((k, i) => {
    return {
      name: k.length > 5 ? k.slice(0, 4) + '...' : k,
      value: storedStat[k].value,
    }
  })

  return (
    <Container>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </Container>
  )
}

export default StatGraph
