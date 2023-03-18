import React, {  useState } from 'react'
import Nav, { Hamburger, Imic, List, Navli } from './Navbar.style'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)


  return (
    <Nav justify="space-between" wrap="wrap">
      <Imic to="/">
        <i>{"<Abraham>"}</i>
        <span>Recipe</span>
      </Imic>
      <Hamburger onClick={()=> setIsOpen(!isOpen)}>
        <GiHamburgerMenu/>
      </Hamburger>
      <List isOpen={isOpen} >
        <Navli to="/">Home</Navli>
        <Navli to="/about">About</Navli>
        <Navli to="/register">Register</Navli>
        <Navli onClick={()=>sessionStorage.clear()} to="/">Logout</Navli>
      </List>

    </Nav>
  )
}

export default Navbar