import { Component } from 'react'
import styled from 'styled-components'
import { getTodayKo } from '../../time/times'

interface Props {}
interface State {
  time: string
}

const Container = styled.div`
  margin-left: 20px;
  font-size: 36px;
`
const DateContainer = styled.div`
  font-size: 24px;
`
const TimeContainer = styled.div``

class Clock extends Component<Props, State> {
  initialDate = new Date(2021, 9, 23, 0, 0, 0)
  sec = 0

  date = `${this.initialDate.getFullYear()}.${
    this.initialDate.getMonth() + 1
  }.${this.initialDate.getDate()}`

  today = getTodayKo()

  intervalId: any = null

  state = {
    time: '',
  }

  formatTime(time: number) {
    if (time < 10) return `0${time}`
    else return `${time}`
  }

  componentDidMount() {
    this.setState({
      time: `${this.formatTime(this.initialDate.getHours())}:${this.formatTime(
        this.initialDate.getMinutes()
      )}:${this.formatTime(this.initialDate.getSeconds())}`,
    })

    this.intervalId = setInterval(() => {
      if (this.sec === 60) this.sec = 0
      const date = new Date(2021, 9, 22, 14, 15, this.sec++)
      this.setState({
        time: `${this.formatTime(date.getHours())}:${this.formatTime(
          date.getMinutes()
        )}:${this.formatTime(date.getSeconds())}`,
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
      <Container>
        <DateContainer>
          {date} ({this.today})
        </DateContainer>
        <TimeContainer>{time}</TimeContainer>
      </Container>
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
