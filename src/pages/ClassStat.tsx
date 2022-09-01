import { FC } from 'react'
import { useParams } from 'react-router'
import storedStat from '../stat/stat'

const ClassStat: FC = () => {
  const { subject } = useParams<{ subject: string }>()
  const data = storedStat[subject] ? storedStat[subject] : []
  return <div>{subject}</div>
}

export default ClassStat
