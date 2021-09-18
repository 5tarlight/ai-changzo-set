const School = {
  HYUH: {
    code: 'HYUH',
    name: '한양대학교사범대학부속고등학교',
  },
}

export const isValidSchool = (str: string | null) => {
  if (!str) return false
  else {
    if (Object.keys(School).includes(str)) return true
    else {
      let found = false
      Object.values(School).forEach(({ code, name }) => {
        if (!found) found = code === str || name === str
      })
      return found
    }
  }
}

export default School
