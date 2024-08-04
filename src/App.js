import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Courses from './components/Courses'

export default function App() {
  return (
    <>
   <Header/>
   {/* <Courses/> */}
   <Routes>
     <Route path='/courses' element={<Courses/>}/>
   </Routes>
    </>
  )
}