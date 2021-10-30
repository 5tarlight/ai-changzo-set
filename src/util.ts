import { Id } from './App'

export const isValidId = ({ grade, clazz, no }: Id) =>
  !(clazz === -1 || grade === -1 || no === -1)

export const calcCurTime = (date: Date) => {
  const hour = date.getHours()

  // if (hour < 8) return 0
  // else if (hour < 9) return 1
  // else if (hour < 10) return 2
  // else if (hour < 11) return 3
  // else if (hour < 13) return 4
  // else if (hour < 14) return 5
  // else if (hour < 15) return 6
  // else if (hour < 16) return 7
  // else return 8

  return 5
}
