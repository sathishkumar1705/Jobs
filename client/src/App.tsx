import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/main' element={<Main/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App