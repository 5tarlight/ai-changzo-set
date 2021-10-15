import { FC, MouseEvent as ME } from 'react'
import styled from 'styled-components'
import hashHistory from '../../hashHistory'

interface Props {
  value: string
  to: string
}

const Item = styled.div`
  color: white;
  float: right;
  line-height: 64px;
  font-size: 24px;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`

const HeaderItem: FC<Props> = ({ to, value }) => {
  const handleClick = (e: ME<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    hashHistory.push(to)
  }

  return <Item onClick={handleClick}>{value}</Item>
}

export default HeaderItem
