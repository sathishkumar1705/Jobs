import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Main from './components/main'
import PostJobs from './components/postJobs'
import Signup from './components/signup'
import Verification from './components/verification'
function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Main/>} />
      <Route path='/postjobs' element={<PostJobs/>} />
      <Route path='/verification' element={<Verification/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App