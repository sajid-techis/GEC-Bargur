import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CampusNews from './components/CampusNews'
import Academics from './components/Academics'
import Events from './components/Events'
import Student from './components/Student'
import studentImg from './assets/images/student-img.jpg'
import Campus from './components/Campus'
import FooterComponent from './components/Footer'




function App() {


  return (
    <>
     <Header/>
     <Banner/>
     <CampusNews/>
     <Academics/>
     <Events/>
      <Student
        imageSrc={studentImg}
      />
      <Campus/>
      <FooterComponent/>
    </>
  )
}

export default App
