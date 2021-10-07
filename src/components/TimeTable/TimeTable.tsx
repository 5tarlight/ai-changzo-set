import { FC } from 'react'
import styled from 'styled-components'
import { Id } from '../../App'
import { isValidId } from '../../util'
import { isValidSchool } from '../../shcool/School'
import { getSchoolTimeTable, getTodayTime } from '../../time/times'

interface Props {
  id: Id
  school: string
}

const Container = styled.div`
  margin-top: 20px;
`
const Element = styled.div`` // TODO : Replace with TimeCell component
const SchoolError = styled.div``

const TimeTable: FC<Props> = ({ id: { clazz, grade, no }, school }) => {
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
      <Element key={i}>
        {i + 1}. {t}
      </Element>
    ))

    return <Container>{tables}</Container>
  } else {
    return <>login first</>
  }
}

export default TimeTable
