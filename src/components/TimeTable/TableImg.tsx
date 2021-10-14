import { FC } from 'react'
import styled from 'styled-components'
import g1c3 from './img/1-3.jpg'

interface Props {
  grade: number
  clazz: number
}

const imgs = [['', '', g1c3, '', '', '', '', '', '', ''], [], []]

const Image = styled.div`
  width: 500px;
  height: 500px;
`

const TableImg: FC<Props> = ({ grade, clazz }) => {
  const imgBackStyle = {
    background: `rgba(0, 0, 0, .65) url(${imgs[grade - 1][clazz - 1]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundBlendMode: 'darken',
  }

  return <Image style={imgBackStyle} />
}

export default TableImg
