import React from 'react'
import { Typography,Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import '../CssFiles/Home.css'
import Feed from '../Images/Feed'
import Catalogue from '../Pages/Catalogue'
import About from '../Pages/About'
import Form from './Form'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Facebook from '@mui/icons-material/Facebook';


function Home() {

	const navigate = useNavigate(null)

  return (
	// <Nav>
	// 	<NavMenu>
	// 		<NavLink to="/" active>Home</NavLink>
	// 		<NavLink to="/catalogur" active>Catalogue</NavLink>
	// 		<NavLink to="/about" active>About</NavLink>
	// 	</NavMenu>
	// </Nav>

	// <Router>
	// 	<Navbar  />
	// 	<Switch>
	// 		<Route path='/' component={<Home/>} />
	// 		<Route path='/Catalogue' component={<Catalogue/>} />
	// 		<Route path='/' component={<About/>} />
	// 	</Switch>
	// </Router>

	<div>
		<div style={{position:  "sticky"}} className="nav-comp">
      		<div>
				{/* <Typography variant="p" m={1} onClick={()=>navigate('/')}>Home</Typography>
				<Typography variant="p" m={1} onClick={()=>navigate('/catalogue')}>Catalogue</Typography>
				<Typography variant="p" m={1} onClick={()=>navigate('/about')}>About</Typography>
				 */}
				 <div className="nav-typo">
					<Link to='/' element={<Home/>} style={{margin:'15px'}}>Home</Link>
					<Link to='/catalogue' element={<Catalogue/>} style={{margin:'15px'}}>catalogue</Link>
					<Link to='/about' element={<About/>} style={{margin:'15px'}}>About</Link>
				 </div>
					
            </div>
    	    <div className="nav-head">
            	<ShoppingCartIcon className="nav-icon-1"/>
            	<Typography variant="h5">
					<div className="nav-head-title">
						<p>seven </p>
						<p style={{color:"blueviolet"}}> shop</p>
					</div>
            	</Typography>
          	</div>
        	<div className="nav-icon">
        		<SearchIcon/>
        		<PersonIcon onClick={()=>navigate("/form")}/>
				<Badge badgeContent={1} color="primary" >
  					<ShoppingBagIcon color="action" />
				</Badge>
            	
          	</div>
        	
     	</div>
		
		<div className="feed-main">
			<Feed/>
		</div>
		<div className="footercont">
			<div className="foot-1">
				<p style={{fontSize:"25px"}}>001-2345-67-89</p>
				<p>Mon.-Fri. 10:00 to 20:00</p>
				<div className="foot-icon">
				 <Facebook disabled/>
				 <YouTubeIcon/>
				 <GoogleIcon/>
				 <InstagramIcon/>
				</div>
			</div>
			<div className="foot-2">
				 <h4 style={{fontWeight:"lighter", textAlign:"start",paddingBottom:"10px"}}>About Shop</h4>
				 <p>Aboue</p>
				 <p>Contact</p>
				 <p>Blog</p>
				 <p>Site Map</p>

			</div>
			
			<div className="foot-3">
				 <h4 style={{fontWeight:"lighter", textAlign:"start",paddingBottom:"10px"}}>Customer Info</h4>
				 <p>Payment</p>
				 <p>Delivery</p>
				 <p>Order Tracking</p>
				 <p>Exchanges & returns</p>
				 <p>Terms & Conditions</p>

			</div>
			<div className="foot-4">
				 <h4 style={{fontWeight:"lighter", textAlign:"start",paddingBottom:"10px"}}>Catalogue</h4>
				 <p>New Incomes</p>
				 <p>Bestsellers</p>
				 <p>sale</p>
				 <p>Size guide</p>

			</div>
			<div className="foot-5">
				<h3 style={{fontWeight:"lighter"}}>News Letter Sign Up</h3>
				<input className="foot-input" placeholder="Enter Your Email..."></input>
				<button className="foot-btn">Sign Me Up</button>
				<p>Be the first to know about our new arrivals and exclusive offers.</p>
			</div>
		</div>
		<footer style={{fontWeight:"lighter", paddingTop:"10px",textAlign:"start",fontSize:"13px"}}>© Copyright 2022 Dream-Theme. All rights reserved</footer>
	</div>
	

	
  )
}

export default Home