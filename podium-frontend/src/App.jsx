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
import LoginComponent from './components/LoginComponent'
import HomePageComponent from './components/HomePageComponent'
import ReviewWriteComponent from './components/ReviewWriteComponent'

function App() {


  
  //Main app. Put components here
  return (
    <>
      <BrowserRouter >
        <HeaderComponent />
          {/*Routes allows us to route pages to different React components. */}
          <Routes>
            {/*Localhost:3000 */}
            <Route path="/"></Route>
            {/*Localhost:3000/Users */}
            <Route path="/users" element = {<ListUserCompontent />}></Route>
            {/* Localhost:3000/addUser */}
            <Route path = "/adduser" element = {<UserComponent />}></Route>
            {/* Localhost:3000/updateUser/id */}
            <Route path = "/updateUser/:id" element = {<UserComponent/>}></Route>
            {/* Localhost:3000/login */}
            <Route path = "/login" element = {<LoginComponent/>}></Route>
            {/* Localhost:3000/home */}
            <Route path = "/home" element = {<HomePageComponent data={"Guys"}/>}></Route>
            {/* Localhost:3000/writereview */}
            <Route path = "/writereview" element = {<ReviewWriteComponent/>}></Route>
          </Routes>
        <FooterComponent />
      </ BrowserRouter>  
    </>
  )
}

export default App
