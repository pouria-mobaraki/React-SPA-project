import React from 'react'
import { useParams } from 'react-router-dom'

export default function MainCourse() {
 let params = useParams()
 console.log(params.courseId);
 

  return (
    <div>

    </div>
  )
}
