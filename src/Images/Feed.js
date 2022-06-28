
import React from 'react'
import mobile from './mobile.jpg'
import lap from './lap.jpg'
import dress from './dress.jpg'
import Signup from './signup.jpg'
import SupportIcon from '@mui/icons-material/Support';
import GppGood from '@mui/icons-material/GppGood'
import Cached from '@mui/icons-material/Cached'
import LocalShipping from '@mui/icons-material/LocalShipping'
import './Feed.css'


function Feed() {

return (
    <div className="container">
      
        <div className="img-cont">
          <img src={require('./mobile.jpg') } alt="mobile" height="700px" width="100%"></img>
          
        </div>
        
      <div  className="img-cont-1">
        <img src={lap} alt="mobile" height="300px" width="35%"></img>
        <img src={dress} alt="mobile" height="300px" width="35%"></img>
        <img src={Signup} alt="mobile" height="300px" width="30%"></img>
      </div>
      <div className="support">
        <div className="support-security">
          <GppGood  />
          <h4>Security</h4>
          <p>100% save online payments</p>
        </div>
        <div className="support-return">
          <Cached/>
          <h4>30 days return period</h4>
          <p>Easy return & refund</p>
        </div>
        <div className="support-cust">
          <SupportIcon/>
          <h4>Customer Support</h4>
          <p>We are here 24/7</p>
        </div>
        <div className="support-del">
          <LocalShipping disabled/>
          <h4>Felixible Shipping</h4>
          <p>Maximum support</p>
        </div>
      </div>
      
     
    </div>


  )
}

export default Feed