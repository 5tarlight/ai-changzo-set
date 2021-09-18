import { FC } from 'react'
import styled from 'styled-components'
import { Id } from '../../App'
import { isValidId } from '../../util'
import { isValidSchool } from '../../shcool/School'

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

    return <Container>Load Successful</Container>
  } else {
    return <>login first</>
  }
}

export default TimeTable
