import {ThemeProvider} from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import {Container} from './components/styled/Container.styled'
import GlobalStyles from './components/styled/Global'
import content from './content'

const theme = {
  colors:{
    header:'rgb(51 0 255 / 50%)',
    titleheader:'#00ff32d4',
    body: '#f0efe3',
    footer:'#0c6363',
    
  },
  mobile:'768px'
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
    <Header/>

    <Container>
      {content.map((item,index)=>(
        <Card key={index} item={item}/>
      ))}
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
