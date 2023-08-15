import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={ theme }>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
)
