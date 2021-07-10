import React from 'react'
import '../assets/styles/homepage.css'
import Logo2 from './images/Pinterest.png'
import Image from './images/Group 33.png'
import S from './images/S.png'
import Notification from './images/Vector.png'
import Textsms from './images/Subtract.png'
import { FaSearch  } from 'react-icons/fa';





function Homepage() {
    return (
        <div className="homepage">
            <div className="logo2">
             <img src={Logo2}  alt=""/>
            </div>
          <div className="icons">
              <div className="icon-btns">
                 <button id="one">Home</button>
             </div>
             <div className="search">
                <span className="fasearch"><FaSearch/></span> 
                <input type="text" class="text" placeholder="Search" />
             </div>
             <div className="img-icons">
               <img src={Notification} alt="" className="frst"  />
                <img src={Textsms} alt="" className=" scnd" />
                <img src={S} alt="" className="thrd" />
           </div>
         </div>
         <div >
         <img className="image" src={Image} alt=""  />
         </div>

       </div>
    )
}

export default Homepage
