import React from 'react';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
    <nav className="app__navbar">
      <div className="app__navbar-pp">
        <img src={images.profilepic} alt="profile pic" />
      </div>
      <ul className="app__navbar-links"> 
        <li className="p__opensans"> <a href="#home">Home</a> </li>
        <li className="p__opensans"> <a href="#about">About Me</a> </li>
        <li className="p__opensans"> <a href="#menu">Projects</a> </li>
        <li className="p__opensans"> <a href="#awards">Photos</a> </li>
        <li className="p__opensans"> <a href="#contact">Contact</a> </li>
      </ul>
     
     </nav>
); 

export default Navbar;