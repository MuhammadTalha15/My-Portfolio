import { useState } from 'react'
import './styles/App.css'
import './styles/second.css'
import './styles/third.css'
import './styles/fourth.css'
import Navbar from './components/navbar'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className='mn'>

        <Navbar></Navbar>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
  
      </main>
    </>
  )
}

export default App