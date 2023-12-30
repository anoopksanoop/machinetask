import React from "react";
import "./Home.css";
import { useState } from "react";
import Content from "./content";
import AOS from 'aos'
const Home = () => {
  AOS.init();
  
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="background">
  
    <div className={`dashboard-container ${isSidebarClosed ? 'close' : ''} ${isDarkMode ? 'dark' : ''}`}>
      <nav className="sidebar">
      <header>
      <div className="image-text">
        <span className="image">
          <img src="logo" alt=""/>
        </span>

        <div className="texts logo-text">
        <img  data-aos="flip-up" className="img"  src="https://ih1.redbubble.net/image.3700578378.6680/pp,504x498-pad,600x600,f8f8f8.jpg" alt=""/>
          <span  data-aos="flip-up" className="name">Ram Mohan</span>
          <span data-aos="flip-up" className="profession">rammohn2@gmail.com</span>
        </div>
      </div>

      <i className='bx bx-chevron-right toggle'></i>
    </header>

    <div className="menu-bar">
      <div className="menu">

      

        <ul className="menu-links">
          <li className="nav-link"  data-aos="fade-right">
            <a href="">
             
                <img className='bx bx-home-alt icon' src="https://cdn-icons-png.flaticon.com/128/1828/1828673.png" alt=""/>
             
              <span className="text nav-text">Dashboard</span>
            </a>
          </li>

          <li className="nav-link" data-aos="fade-right">
            <a href="">
            
                <img  className='bx bx-bar-chart-alt-2 icon' src="https://cdn-icons-png.flaticon.com/128/11061/11061013.png" alt=""/>
              
              <span className="text nav-text">Perks</span>
            </a>
          </li>

          <li className="nav-link"data-aos="fade-right">
            <a href="#">
              
                <img className='bx bx-bell icon' src="https://cdn-icons-png.flaticon.com/128/12795/12795460.png" alt="" />
              
              <span className="text nav-text">Addons</span>
            </a>
          </li>

          <li className="nav-link" data-aos="fade-right" >
            <a href="#">
              
                <img className='bx bx-pie-chart-alt icon' src="https://cdn-icons-png.flaticon.com/128/8744/8744051.png" alt=""/>
             
              <span className="text nav-text">FAQ</span>
            </a>
          </li>

          <li className="nav-link" data-aos="fade-right">
            <a href="#">
              
                <img className='bx bx-heart icon' src="https://cdn-icons-png.flaticon.com/128/10439/10439810.png" alt=""/>
             
              <span className="text nav-text">Support</span>
            </a>
          </li>

        
        </ul>
      </div>

<br/><br/><br/>
      <div className="bottom-content">
        <li className="" >
          <a href="">
            
              <img  className='bx bx-log-out icon' src="https://cdn-icons-png.flaticon.com/128/13100/13100849.png" alt=""/>
            
            <span className="text nav-text">Logout</span>
          </a>
        </li>


      </div>
    </div>
      </nav>

      <Content/>
    </div>
 

    </div>
  );
};

export default Home;
