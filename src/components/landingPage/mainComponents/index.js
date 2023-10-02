// import React from 'react'
// import './style.css';
// import Button from '../../common/Button';
// import iphone from "../../../assets/iphone.png";
// import gradient from "../../../assets/gradient.png";
// import {motion} from "framer-motion";


// function MainComponents() {
//   return (
// <div className='flex-info'>
// <div className='left-component'>
// <h1 className='track-crypto-heading'>Track Crypto</h1>
// <h1 className='real-time-heading'>Real Time.</h1>
// <p>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
// <div className='btn-flex'>
//     <Button text ={"Dashboard"}/>
//     <Button text ={"share"} outlined={true}/>
// </div>
// </div>
// <div className='phone-container'>
//     <motion.img src={iphone} className='iphone'
//     initial ={{y:-20}}
//     animate ={{y:20}}
//     transition={{
//         type:"smooth",
//         repeatType:"mirror",
//         duration:2,
//         repeat: Infinity,
//     }}
//     />
//     <img src={gradient} className='gradient'/>


// </div>
//     </div>
//   )
// }

// export default MainComponents;


import React from "react";
import Button from "../../common/Button";
//import Button from "../../Common/Button/button";
import "./style.css";
import gradient from "../../../assets/gradient.png";
import iPhone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";

function LandingPageComponent() {
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/dashboard">
            <Button text="Dashboard" />
          </a>
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="landing-right">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iPhone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageComponent;