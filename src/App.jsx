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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/My-Portfolio",
      element: <><Navbar /><First /></>
    },
    {
      path: "/about",
      element: <><Navbar /><Second /></>
    },
    {
      path: "/projects",
      element: <><Navbar /><Third /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Fourth /></>
    }
  ])

  return (
    <>
      <main className='mn'>
        
        <RouterProvider router={router}></RouterProvider>
  
      </main>
    </>
  )
}

export default App