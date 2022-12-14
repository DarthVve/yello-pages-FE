import { useState } from "react";
import "./navbar.scss";
import logo from "../../../assets/logo.svg"
import { useRef } from "react";

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 760);
  const menuToggle = useRef();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} width="auto" height={40} className="logo" alt="logo" />  
        <span className="typeface">Yello Pages</span>
      </div>
      <div className="navbar__menu">
        <div className="navbar__button" ref={menuToggle} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#E8D63999" d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
        </div>
        {
          isMenuOpen &&
          <div className="navbar__links">
            <a href="/#about" className="navbar__link">About</a>
            <a href="/#contact" className="navbar__link">Contact Us</a>
            <a href="/login" className="navbar__link btn">Log In</a>
            <a href="/register" className="navbar__link btn">Sign Up</a>
          </div>
        }
      </div>
    </div>
  )
}