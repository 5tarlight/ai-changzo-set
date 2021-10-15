import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Id } from '../App'
import PollItem from '../components/Poll/PollItem'
import { getSchoolTimeTable, getTodayTime } from '../time/times'
import { isValidId } from '../util'

interface Props {
  id: Id
  school: string
}

const Container = styled.div`
  width: 400px;
  margin: 130px auto 0px auto;
  padding: 20px;
  border-radius: 5px;
  background-color: skyblue;
`

const Poll: FC<Props> = ({ id, school }) => {
  const [timeTable, setTimeTable] = useState<string[]>([])
  const [err, setErr] = useState(false)

  useEffect(() => {
    if (isValidId(id)) {
      const schoolTable = getSchoolTimeTable(school)
      if (
        !schoolTable ||
        schoolTable.length < id.grade ||
        schoolTable[id.grade - 1].length < id.clazz
      ) {
        setErr(true)
      }

      setTimeTable(
        getTodayTime(
          (getSchoolTimeTable(school) || [])[id.grade - 1][id.clazz - 1]
        ) || []
      )
    }
  }, [school, id])

  const polls = timeTable.map((time, index) => (
    <PollItem value={time} key={index} />
  ))

  return (
    <Container>
      {err ? <>Err</> : isValidId(id) ? polls : <div>Login First</div>}
    </Container>
  )
}

export default Poll
