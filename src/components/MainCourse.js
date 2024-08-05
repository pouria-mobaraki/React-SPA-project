import React from 'react'
import { useParams } from 'react-router-dom'
import CoursesData from '../CoursesData'
import { Container,Row,Col } from 'react-bootstrap'


export default function MainCourse() {
 let params = useParams()
 console.log(params.courseId);
 let mainCourseData = CoursesData.find(course =>course.id == params.courseId)
 console.log(mainCourseData);
 

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
        <img src={mainCourseData.img} style={{width:'80%',height:'300px'}} alt=""/>
        </Col>
        <Col>
        <h2>{mainCourseData.title}</h2>
        <p>{mainCourseData.description}</p>
        </Col>
      </Row>
    </Container>
  )
}
