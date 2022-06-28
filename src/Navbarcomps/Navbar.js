import React from 'react'
import { Nav, NavLink, NavMenu} from './NavbarElement'

function Navbar() {
  return (
	<Nav>
		<NavMenu>
			<NavLink to="/" active>Home</NavLink>
			<NavLink to="/catalogue" active>Catalogue</NavLink>
			<NavLink to="/about" active>About</NavLink>
		</NavMenu>
	</Nav>

	
  )
}

export default Navbar