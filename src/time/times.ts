import { isValidSchool } from '../shcool/School'
import HYUH from './HYUH'

export interface Times {
  subject: string
  startAt: string
  endAt: string
}

export interface TimeTable {
  MON: string[]
  TUE: string[]
  WED: string[]
  THU: string[]
  FRI: string[]
}

export const getSchoolTimeTable = (school: string): TimeTable[][] | null => {
  if (!isValidSchool(school)) return null

  switch (school) {
    case 'HYUH':
      return HYUH

    default:
      return null
  }
}

export const getToday = () => {
  const day = new Date(2021, 10, 23).getDay()
  return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][day - 1]
}

export const getTodayKo = () => {
  const day = new Date(2021, 10, 23).getDay()
  return ['일', '월', '화', '수', '목', '금', '토'][day]
}

export const getTodayTime = (table: TimeTable) => {
  const day = getToday()

  switch (day) {
    case 'MON':
      return table.MON
    case 'TUE':
      return table.TUE
    case 'WED':
      return table.WED
    case 'THU':
      return table.THU
    case 'FRI':
      return table.FRI

    default:
      return table.FRI
  }
}

export const getZoomLink = (subject: string, type: number = 0) => {
  const zoom =
    'https://us05web.zoom.us/j/9733198448?pwd=cXh3V2tsTllmZW44RTk0bDNDZWRhQT09'
  // TODO : Real Link
  return zoom
}
