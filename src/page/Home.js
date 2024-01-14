import React from 'react'
import Intro from '../sections/Home/Intro'
import Motto from '../sections/Home/Motto'
import Leads from '../sections/Home/Leads'
import LatestPosts from '../sections/Home/LatestPosts'
import UpcomingEvents from '../sections/Home/UpcomingEvents'
import FacultyReview from '../sections/Home/FacultyReview'

const Home = () => {
  return (
    <div>
      <Intro />
      <Leads />
      <Motto />
      <LatestPosts />
      <UpcomingEvents />
      <FacultyReview />
    </div>
  )
}

export default Home
