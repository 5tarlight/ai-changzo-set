import { FC, MouseEvent as ME } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  font-size: 50px;
  line-height: 60px;
  height: fit-content;
  width: fit-content;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }
`

const Logo: FC<{}> = () => {
  const history = useHistory()

  const handleClick = (e: ME<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    history.push('/')
  }

  return (
    <>
      {/* @TODO insert real img based logo. svg preferred */}
      <Container onClick={handleClick}>S.E.T</Container>
    </>
  )
}

export default Logo
