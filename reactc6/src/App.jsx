import React, { Component } from 'react'
import About  from './pages/About'
import Counter from './components/Counter'
import {BrowserRouter,Route,Routes} from"react-router-dom"
import GuestLayout from './layout/GuestLayout'
import Todo from './components/Todo'





export default function App() {
  return (
    <BrowserRouter>
    

    <Routes>
      <Route path='/' element={<GuestLayout/>}>
        <Route path='/home' index element></Route>
        <Route path='/counter'  element= {<Counter/>} ></Route>      
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/todo' element = {<Todo/>}></Route>

      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}
