import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Id } from '../App'
import PollItem from '../components/Poll/PollItem'
import PollSlider from '../components/Poll/PollSlider'
import SubmitBtn from '../components/Poll/SubmitBtn'
import hashHistory from '../hashHistory'
import { updateStat } from '../stat/stat'
import { getSchoolTimeTable, getTodayTime } from '../time/times'
import { isValidId } from '../util'

interface Props {
  id: Id
  school: string
}

const Container = styled.div`
  width: 400px;
  margin: 70px auto 0px auto;
  padding: 20px;
  border-radius: 5px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
`

const PollContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Poll: FC<Props> = ({ id, school }) => {
  const [timeTable, setTimeTable] = useState<string[]>([])
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<number[]>([])

  const initTimeTable = (list: string[]) => {
    const arr: number[] = []
    for (let i = 0; i < list.length; i++) {
      arr.push(3)
    }
    setValues(arr)
    setTimeTable(list)
  }

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

      initTimeTable(
        getTodayTime(
          (getSchoolTimeTable(school) || [])[id.grade - 1][id.clazz - 1]
        ) || []
      )
    }
  }, [school, id])

  const updateValue = (v: number, i: number) => {
    const arr = [...values]
    arr[i] = v
    setValues(arr)
  }

  const polls = timeTable.map((time, index) => (
    <PollContainer key={index}>
      <PollItem value={time} />
      <PollSlider
        value={values[index]}
        handleChange={v => updateValue(v, index)}
      />
    </PollContainer>
  ))

  const handleSubmit = () => {
    values.forEach((v, i) => {
      updateStat(timeTable[i], v)
    })
    hashHistory.push('/stat')
  }

  return (
    <Container>
      {err ? (
        <>Err</>
      ) : isValidId(id) ? (
        <>
          {polls}
          <SubmitBtn handleSubmit={handleSubmit} />
        </>
      ) : (
        <div>Login First</div>
      )}
    </Container>
  )
}

export default Poll
