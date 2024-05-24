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
import { useNavigate } from 'react-router-dom'

function App() {
  
  //Main app. Put components here
  return (
    <>
      <BrowserRouter >
        <HeaderComponent />
          <Routes>
            {/*Localhost:3000 */}
            <Route path="/"></Route>
            {/*Localhost:3000/Users */}
            <Route path="/users" element = {<ListUserCompontent />}></Route>
            {/* Localhost:3000/addUser */}
            <Route path = "/adduser" element = {<UserComponent />}></Route>
            {/* Localhost:3000/updateUser/id */}
            <Route path = "/updateUser/:id" element = {<UserComponent/>}></Route>
          </Routes>
        <FooterComponent />
      </ BrowserRouter>  
    </>
  )
}

export default App
