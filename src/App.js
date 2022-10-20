import { Container } from '../src/components/styles/Container.styled'
import Header from '../src/components/Header.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header />
      <Container>
        <h1>Hello world</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
