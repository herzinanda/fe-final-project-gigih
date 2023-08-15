import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import VideoDetail from './VideoDetail'
import NotFound from './404'
// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <div>About</div> } />
        <Route path="video">
          <Route path=":videoId" element={ <VideoDetail /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>

    </>
  )
}

export default App
