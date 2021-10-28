import { FC } from 'react'
import styled from 'styled-components'
import { Id } from '../../App'
import { isValidId } from '../../util'
import { isValidSchool } from '../../shcool/School'
import { getSchoolTimeTable, getTodayTime, getZoomLink } from '../../time/times'

interface Props {
  id: Id
  school: string
  curTime: number
}

interface ElementProps {
  done: boolean
  current?: boolean
}

const Container = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`
const Element = styled.a<ElementProps>`
  color: black;
  text-decoration: none;
  display: block;
  width: 250px;

  &:hover {
    background-color: #f0f0f0;
  }

  ${({ done }) => {
    if (done) return 'color: #b4b4b4;'
  }}

  ${({ current }) => {
    if (current) return 'color: orange;'
  }}
` // TODO : Replace with TimeCell component
const SchoolError = styled.div``

const TimeTable: FC<Props> = ({
  id: { clazz, grade, no },
  school,
  curTime,
}) => {
  if (isValidId({ grade, clazz, no })) {
    console.log(school)

    if (!isValidSchool(school)) {
      return <SchoolError>Not valid School</SchoolError>
    }

    const timeTable = getSchoolTimeTable(school)
    const notFound = <Container>등록된 시간표가 없습니다.</Container>

    if (
      !timeTable ||
      timeTable.length < grade ||
      timeTable[grade - 1].length < clazz
    ) {
      return notFound
    }

    const table = getTodayTime(timeTable[grade - 1][clazz - 1])
    if (!table) return notFound

    const tables = table.map((t, i) => (
      <Element
        key={i}
        done={i < curTime - 1}
        current={i == curTime - 1}
        href={getZoomLink(t)}
        target="_blank"
      >
        {i + 1}. {t}
      </Element>
    ))

    return <Container>{tables}</Container>
  } else {
    return <>login first</>
  }
}

export default TimeTable
