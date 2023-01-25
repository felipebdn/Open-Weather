import { ThemeProvider } from 'styled-components'
import { LocalsContextProvider } from './context/localsContext'
import { GlobalStyle } from './Global/GlobalStyle'
import { defaultTheme } from './Global/themes/default'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LocalsContextProvider>
        <Home />
        <GlobalStyle />
      </LocalsContextProvider>
    </ThemeProvider>
  )
}
