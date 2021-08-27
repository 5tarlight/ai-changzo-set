import { FC, MouseEvent as ME } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import hashHistory from '../../hashHistory'

const Container = styled.div`
  color: white;
  font-size: 50px;
  line-height: 60px;
  height: fit-content;
  float: left;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin-left: 100px;

  &:hover {
    cursor: pointer;
  }
`

const Logo: FC<{}> = () => {
  const handleClick = (e: ME<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    hashHistory.push('/')
  }

  return (
    <>
      {/* @TODO insert real img based logo. svg preferred */}
      <Container onClick={handleClick}>S.E.T</Container>
    </>
  )
}

export default Logo