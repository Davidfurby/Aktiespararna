import React from 'react';  
import PortfolioHeader from './PortfolioComponenter.js/PortfolioHeader'
import Portfolioframe from './PortfolioComponenter.js/Portfolioframe'
import './Portfolio css/Portfolio.css'
import SidebarButton from "../Components/SidebarButton"
import SideBar from "../Components/SideBar"


const Portfolio = () => {
    return (
      <div id = "portfolio">
      <PortfolioHeader/>
      <Portfolioframe/>
      </div>
    );
  }

export default Portfolio;