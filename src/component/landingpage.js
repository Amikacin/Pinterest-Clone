import React from 'react'
import '../assets/styles/style.css'
import Signup from './signup'
import Logo from './images/pinterestlogo 1.png'
import Group1  from './images/Group 1.png'



function Landingpage() {
    return (
        <div>
            <div className="landingpage_upper">
               <div className="container">
                     <img className="logo" src={Logo}/>
                    <nav >
                     <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Business</a></li>
                        <li><a href="">Blog</a></li>
                     </ul>
                     <div className="button">
                       <button className="login">Log in</button>
                       <button className="signup">Sign in</button>
                     </div>
                   </nav>
                </div>
                  <div className="content ">
                    <h1>Get your next<br/><scan className="subcontent">Weeknight dinner idea</scan></h1>
                    
                  </div>
                <div>
                    <img className="group1" src={Group1} />
                </div>

             </div>
                
            <div className="landingpage_lower">
                <Signup/>
            </div>
        </div>
    )
}

export default Landingpage
