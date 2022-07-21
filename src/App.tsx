import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import { Wrapper } from './App.styles'
import { themeProps } from './styles/theme'
import GlobalStyles from './styles/globalStyle'

function App() {
  return (
    <ThemeProvider theme={themeProps}>
      <Header />

      <Wrapper>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </Wrapper>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
