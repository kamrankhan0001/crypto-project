import React from 'react'
import Header from '../components/common/Header';
import MainComponents from '../components/landingPage/mainComponents';
import Footer from '../components/common/Footer';

function HomePage() {
  return (
    <div>
         <Header />
     <MainComponents />
     <div>
     <Footer />
     </div>
    </div>
  )
}

export default HomePage