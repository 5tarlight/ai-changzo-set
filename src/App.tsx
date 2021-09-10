import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { useState } from 'react'

export function App() {
  const [id, setId] = useState('12345')

  const login = (newId: string) => {}

  return (
    <>
      <Header />
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </HashRouter>
    </>
  )
}
