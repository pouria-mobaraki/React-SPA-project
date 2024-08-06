import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
    <h2 style={{display:'flex', justifyContent:'center' }}>This is a about </h2>
    <Link to='setting' style={{display:'flex', justifyContent:'center' }}>Setting</Link>
    <Link to='dashboard'style={{display:'flex', justifyContent:'center' }}>Dashboard</Link>
      <hr/>
      <Outlet/>
    </>
    
  )
}
