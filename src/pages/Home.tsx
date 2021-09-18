import { FC } from 'react'
import HelloWorld from '../components/HelloWorld/HelloWorld'
import { Id } from '../App'
import TimeTable from '../components/TimeTable/TimeTable'

interface Props {
  id: Id
  school: string
}

const Home: FC<Props> = ({ id, school }) => (
  <>
    <HelloWorld id={id} />
    <TimeTable id={id} school={school} />
  </>
)

export default Home
