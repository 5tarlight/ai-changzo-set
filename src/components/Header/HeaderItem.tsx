import { FC, MouseEvent as ME } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

interface Props {
  value: string
  to: string
}

const Item = styled.div`
  color: white;
  float: right;
`

const HeaderItem: FC<Props> = ({ to, value }) => {
  const history = useHistory()

  const handleClick = (e: ME<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    history.push(to)
  }

  return <Item onClick={handleClick}>{value}</Item>
}

export default HeaderItem
