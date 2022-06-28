import React from 'react'
import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
background: #888;
height: 80px;
display: flex;
justify-content: space-between;
padding: 5px;`
export const NavLink = styled(Link)` 
color:#808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;   
cursor: pointer;
  &.active {
    color: #000000;
  }
`;
export const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
    display: none;
  }`

