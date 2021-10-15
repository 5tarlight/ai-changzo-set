import { FC, useEffect, useState } from 'react'
import HelloWorld from '../components/HelloWorld/HelloWorld'
import { Id } from '../App'
import TimeTable from '../components/TimeTable/TimeTable'
import Clock from '../components/TimeTable/Clock'
import { calcCurTime } from '../util'
import TableImg from '../components/TimeTable/TableImg'

interface Props {
  id: Id
  school: string
}

const Home: FC<Props> = ({ id, school }) => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000 * 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <TableImg grade={id.grade} clazz={id.clazz} />
      <HelloWorld id={id} />
      <Clock />
      <TimeTable id={id} school={school} curTime={calcCurTime(date)} />
    </>
  )
}

export default Home
