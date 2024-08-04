import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Courses from './components/Courses'
import MainCourse from './components/MainCourse'

export default function App() {
  return (
    <>
   <Header/>
   {/* <Courses/> */}
   <Routes>
     <Route path='/courses' element={<Courses/>}/>
     <Route path='/course/:courseId' element={<MainCourse/>}/>
   </Routes>
    </>
  )
}