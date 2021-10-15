import { FC } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from 'styled-components'

interface Props {}

const Container = styled.div``

const PollSlider: FC<Props> = () => {
  const Sli = Slider.createSliderWithTooltip(Slider)

  return (
    <Container>
      <Sli defaultValue={5} min={1} max={5} />
    </Container>
  )
}

export default PollSlider
