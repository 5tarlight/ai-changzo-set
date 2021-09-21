import { FC } from 'react'
import styled from 'styled-components'
import { Id } from '../../App'
import { isValidId } from '../../util'
import { isValidSchool } from '../../shcool/School'
import { getSchoolTimeTable } from '../../time/times'

interface Props {
  id: Id
  school: string
}

const Container = styled.div``
const SchoolError = styled.div``

const TimeTable: FC<Props> = ({ id: { clazz, grade, no }, school }) => {
  if (isValidId({ grade, clazz, no })) {
    console.log(school)

    if (!isValidSchool(school)) {
      return <SchoolError>Not valid School</SchoolError>
    }

    const timeTable = getSchoolTimeTable(school)

    if (
      !timeTable ||
      timeTable.length < grade ||
      timeTable[grade - 1].length < clazz
    ) {
      return <Container>등록된 시간표가 없습니다.</Container>
    }

    console.log(timeTable[grade - 1][clazz - 1])

    return <Container>Load Successful</Container>
  } else {
    return <>login first</>
  }
}

export default TimeTable
