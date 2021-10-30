import { useState, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalStyle } from './styles/GlobalStyle'
import Home from './pages/Home'
import Poll from './pages/Poll'
import Stat from './pages/Stat'
import StatGraph from './pages/StatGraph'

export interface Id {
  grade: number
  clazz: number
  no: number
}

export function App() {
  const [id, setRawId] = useState<Id>({
    grade: -1,
    clazz: -1,
    no: -1,
  })

  const [school, setSchool] = useState('')

  const setId = (id: Id) => {
    localStorage.setItem('grade', id.grade.toString())
    localStorage.setItem('class', id.clazz.toString())
    localStorage.setItem('no', id.no.toString())

    setRawId(id)
  }

  const [logged, setLogged] = useState(false)

  const login = (newId: string) => {
    if (newId.trim().length !== 5) return

    const grade = parseInt(newId.slice(0, 1))
    const clazz = parseInt(newId.slice(1, 3))
    const no = parseInt(newId.slice(3, 5))

    if (grade < 1 || grade > 3) return

    setId({
      grade,
      clazz,
      no,
    })

    setLogged(true)
  }

  useEffect(() => {
    if (localStorage.getItem('school'))
      setSchool(localStorage.getItem('school') || 'HYUH')
    else {
      localStorage.setItem('school', 'HYUH')
      setSchool('HYUH')
    }

    const grade = localStorage.getItem('grade')
    const clazz = localStorage.getItem('class')
    const no = localStorage.getItem('no')

    let gradeNo: number
    let classNo: number
    let noNo: number

    if (grade === null || clazz === null || no === null) return

    try {
      gradeNo = parseInt(grade)
      classNo = parseInt(clazz)
      noNo = parseInt(no)

      setId({
        grade: gradeNo,
        clazz: classNo,
        no: noNo,
      })
    } catch (e: any) {
      console.error('not valid student no')
    }
  }, [])

  return (
    <>
      <Header
        saveClass={login}
        logged={logged}
        school={school}
        setSchool={setSchool}
        id={`${id.grade}${id.grade}${id.no}`}
      />
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home id={id} school={school} />}
          />
          <Route
            path="/poll"
            exact
            component={() => <Poll id={id} school={school} />}
          />
          <Route path="/stat" exact component={() => <Stat />} />
          <Route path="/graph" exact component={() => <StatGraph />} />
        </Switch>
      </HashRouter>
    </>
  )
}
