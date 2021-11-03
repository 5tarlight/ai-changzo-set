interface Stat {
  [key: string]: {
    count: number
    value: number
  }
}

const storedStat: Stat = {}

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
