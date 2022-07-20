import { ThemeProvider } from 'styled-components'
import { Wrapper } from './App.styles'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import GlobalStyles from './styles/globalStyle'
import { themeProps } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={themeProps}>
      <Header />

      <Wrapper>
        <Sidebar />
        <main>
          <div>Post 1</div>
          <div>Post 2</div>
        </main>
      </Wrapper>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
