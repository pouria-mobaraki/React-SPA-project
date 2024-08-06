import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Courses from './components/Courses'
import MainCourse from './components/MainCourse'
import About from './components/About'

export default function App() {
  return (
    <>
   <Header/>
   
   <Routes>
     <Route path='/courses' element={<Courses/>}/>
     <Route path='/course/:courseId' element={<MainCourse/>}/>
     <Route path='/about/*' element={<About/>}>
      <Route path='setting' element={<p style={{textAlign:'center'}}>Setting</p>}/>
      <Route path='dashboard' element={<p style={{textAlign:'center'}}>Dashboard</p>}/>
     </Route>
   </Routes>
    </>
  )
}