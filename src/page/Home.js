import React from 'react'
import Intro from '../sections/Home/Intro'
import Motto from '../sections/Home/Motto'
import Leads from '../sections/Home/Leads'
import FacultyReview from '../sections/Home/FacultyReview'

const Home = () => {
  return (
    <div>
        <Intro/>
        <Motto/>
        <Leads/>
        <FacultyReview/>
    </div>
  )
}

export default Home