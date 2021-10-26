import { FC } from 'react'
import styled from 'styled-components'
import { isValidId } from '../../util'
import g1c1 from './img/1-1.png'
import g1c2 from './img/1-2.png'
import g1c3 from './img/1-3.png'
import g1c4 from './img/1-4.png'
import g1c5 from './img/1-5.png'
import g1c6 from './img/1-6.png'
import g1c7 from './img/1-7.png'
import g1c8 from './img/1-8.png'
import g1c9 from './img/1-9.png'
import g1c10 from './img/1-10.png'

interface Props {
  grade: number
  clazz: number
}

const imgs = [
  [g1c1, g1c2, g1c3, g1c4, g1c5, g1c6, g1c7, g1c8, g1c9, g1c10],
  [],
  [],
]

const Image = styled.div`
  width: 320px;
  height: 500px;
  float: right;
  margin-right: 50px;
`

const TableImg: FC<Props> = ({ grade, clazz }) => {
  let imgBackStyle = {}
  if (isValidId({ grade, clazz, no: 1 }))
    imgBackStyle = {
      backgroundImage: `url(${imgs[grade - 1][clazz - 1]})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginTop: '50px',
    }
  else
    imgBackStyle = {
      display: 'none',
      width: '0px',
      height: '0px',
    }

  return <Image style={imgBackStyle} />
}

export default TableImg
