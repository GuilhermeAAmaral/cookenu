import React, {useState} from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Router from './routers/Router'
import theme from './constantes/theme'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'

const App = () => {

  const token = localStorage.getItem ("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText ={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router rightButtonText ={rightButtonText} setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App