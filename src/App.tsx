import React from "react"
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";


const App: React.FC =() =>{

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
