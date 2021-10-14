import { FC, useEffect, useState } from 'react'
import HelloWorld from '../components/HelloWorld/HelloWorld'
import { Id } from '../App'
import TimeTable from '../components/TimeTable/TimeTable'
import Clock from '../components/TimeTable/Clock'
import { calcCurTime } from '../util'

interface Props {
  id: Id
  school: string
}

const Home: FC<Props> = ({ id, school }) => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000 * 60 * 5)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <HelloWorld id={id} />
      <Clock />
      <TimeTable id={id} school={school} curTime={calcCurTime(new Date())} />
    </>
  )
}

export default Home
