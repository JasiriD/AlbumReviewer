import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dude from './dude'
import ListUserCompontent from './components/ListUserCompontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListUserCompontent />
    </>
  )
}

export default App
