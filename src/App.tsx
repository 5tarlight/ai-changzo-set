import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalStyle } from './styles/GlobalStyle'
import { useState } from 'react'
import HelloWorld from './components/HelloWorld/HelloWorld'

export interface Id {
  grade: number
  clazz: number
  no: number
}

export function App() {
  const [id, setId] = useState<Id>({
    grade: -1,
    clazz: -1,
    no: -1,
  })
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

  return (
    <>
      <Header saveClass={login} logged={logged} />
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={() => <HelloWorld id={id} />} />
        </Switch>
      </HashRouter>
    </>
  )
}
