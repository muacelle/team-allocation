import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Employees from './components/Employees'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}

export default App
