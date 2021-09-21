import { Component } from 'react'
import styled from 'styled-components'
import { getToday } from '../../time/times'

interface Props {}
interface State {
  time: string
}

const Container = styled.div`
  font-size: 24px;
`

class Clock extends Component<Props, State> {
  initialDate = new Date()

  date = `${this.initialDate.getFullYear()}.${
    this.initialDate.getMonth() + 1
  }.${this.initialDate.getDate()}`

  intervalId: any = null

  state = {
    time: '',
  }

  componentDidMount() {
    this.setState({
      time: `${this.initialDate.getHours()}:${this.initialDate.getMinutes()}:${this.initialDate.getSeconds()}`,
    })

    this.intervalId = setInterval(() => {
      const date = new Date()
      this.setState({
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const {
      date,
      state: { time },
    } = this

    return (
      <>
        <Container>
          {date} {time} ({getToday()})
        </Container>
      </>
    )
  }
}

// const Clock: FC<Props> = () => {
//   const initialDate = new Date()
//   const date = `${initialDate.getFullYear()}.${
//     initialDate.getMonth() + 1
//   }.${initialDate.getDate()}`
//
//   const [time, setTime] = useState(
//     `${initialDate.getHours()}:${initialDate.getMinutes()}:${initialDate.getSeconds()}`
//   )
//
//   setInterval(() => {
//     const date = new Date()
//     setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
//   }, 1000)
//
//   return (
//     <>
//       <Container>
//         {date} {time} ({getToday()})
//       </Container>
//     </>
//   )
// }

export default Clock
