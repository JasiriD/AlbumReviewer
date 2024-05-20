import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dude from './dude'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dude />
    </>
  )
}

export default App
