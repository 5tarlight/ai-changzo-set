import Subject from '../time/Subject'

interface Stat {
  [key: string]: {
    count: number
    value: number
  }
}

const storedStat: Stat = {
  [Subject.COMMON_KOREAN]: {
    count: 3,
    value: 4.5,
  },
  [Subject.COMMON_MATH]: {
    count: 5,
    value: 3.6,
  },
  [Subject.COMMON_KOREAN]: {
    count: 6,
    value: 2.6,
  },
  [Subject.COMMON_SCIENCE]: {
    count: 5,
    value: 4.8,
  },
}

export const updateStat = (key: string, value: number) => {
  if (storedStat[key]) {
    storedStat[key].value =
      (storedStat[key].value * storedStat[key].count + value) /
      ++storedStat[key].count
  } else {
    storedStat[key] = {
      count: 1,
      value: value,
    }
  }
}

export default storedStat
