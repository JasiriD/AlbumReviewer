import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dude from './dude'
import ListUserCompontent from './components/ListUserCompontent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
//Importing BrowserRouter from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserComponent } from './components/UserComponent'

function App() {
  const [count, setCount] = useState(0)

  //Main app. Put components here
  return (
    <>
      <BrowserRouter >
        <HeaderComponent />
          <Routes>
            {/*Localhost:3030 */}
            <Route path="/"></Route>
            {/*Localhost:3030/Users */}
            <Route path="/Users" element = {<ListUserCompontent />}></Route>
            {/* Localhost:3030/addUser */}
            <Route path = "/addUser" element = {<UserComponent />}></Route>
          </Routes>
        <FooterComponent />
      </ BrowserRouter>  
    </>
  )
}

export default App
