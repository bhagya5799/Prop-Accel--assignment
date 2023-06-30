import React from 'react'
import Header from './Header'
import Signup from './Signup'
import './Style.css'
import AboutCourse from './AboutCourse'
import Review from './Review'
import Footer from './Footer'
import ChoosePlan from './ChoosePlan'


const Home:React.FC = () => {
  return (
    <div className="home bg-[url('https://res.cloudinary.com/bhagya/image/upload/v1688112893/Screenshot_53_dvlfvq.png')] h-90  w-screen bg-covered bg-no-repeat grid  gap-32 ">
      <Header />
      <Signup />
      <AboutCourse />
      <ChoosePlan />
      <Review />
      <Footer />
    </div>
  );
}

export default Home
