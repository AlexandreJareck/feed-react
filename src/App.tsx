import { ThemeProvider } from 'styled-components'
import './App.css'
import { Header } from './components/Header'
import GlobalStyles from './styles/globalStyle'
import { themeProps } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={themeProps}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
