import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'

export function App() {
  console.log(window.location.href)

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
