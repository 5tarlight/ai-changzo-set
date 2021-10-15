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
