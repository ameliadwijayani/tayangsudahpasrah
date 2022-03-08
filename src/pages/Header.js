import React from 'react';
import {Link} from 'gatsby'
//current-menu-item
export default function Header() {
  const [CurrentState,setCurrentState]=React.useState("")
  React.useEffect(()=>{
    setCurrentState("/"+window.location.href.split("/")[window.location.href.split("/").length-1])
  },[])
  return (
    <div className="site-header">
      <div className="container">
        <a href="index.html" id="branding">
          <img src="./logo2.jpeg" alt="" className="logo" width="70" height="60"/>
          <div className="logo-text">
            <h1 className="site-title">Samijaya Probolinggo</h1>
            <small className="site-description">Electronics and Cellular</small>
          </div>
        </a> 

        <div className="main-navigation">
          <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
          <ul className="menu">
            <li className={`menu-item ${CurrentState=="/"?"current-menu-item":""}`} ><Link to="/">Home</Link></li>
            <li className={`menu-item ${CurrentState=="/About"?"current-menu-item":""}`} ><Link to="/About">About</Link></li>
            <li className={`menu-item ${CurrentState=="/Product"?"current-menu-item":""}`} ><Link to="/Product">Product</Link></li>
            <li className={`menu-item ${CurrentState=="/Contact"?"current-menu-item":""}`} ><Link to="/Contact">Contact</Link></li>
          
          </ul> 
        </div>


        <div className="mobile-navigation"></div>
      </div>
    </div> 
  );
}
