import { FC } from 'react'
import styled from 'styled-components'
import { isValidId } from '../../util'
import g1c3 from './img/1-3.jpg'

interface Props {
  grade: number
  clazz: number
}

const imgs = [['', '', g1c3, '', '', '', '', '', '', ''], [], []]

const Image = styled.div`
  width: 500px;
  height: 500px;
  float: right;
  margin-right: 50px;
  margin-top: -130px;
`

const TableImg: FC<Props> = ({ grade, clazz }) => {
  let imgBackStyle = {}
  if (isValidId({ grade, clazz, no: 1 }))
    imgBackStyle = {
      background: `rgba(0, 0, 0, .65) url(${imgs[grade - 1][clazz - 1]})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }
  else
    imgBackStyle = {
      display: 'none',
    }

  return <Image style={imgBackStyle} />
}

export default TableImg
