import React from 'react';
import {Link} from 'gatsby'
//current-menu-item
export default function Header() {
  
  const [CurrentState,setCurrentState]=React.useState("")

  React.useEffect(()=>{
    let state=window.location.href.split("/")[window.location.href.split("/").length-1];
    if(window.location.href.split("/")[window.location.href.split("/").length-1]==""){
      state=(window.location.href.split("/")[window.location.href.split("/").length-2])
    }
    setCurrentState("/"+state)
  },[])
 return(
  <div>
   <div className="navbar navbar-fixed-top">
      <div className="navbar-inner">
        <div className="container">
          {/* logo */}
          <a className="brand logo" href="index.html">
          <img alt="Img" src="/logo2.jpeg"  className="logo" width="70" height="60"/>
          <span>
          <b><h1>Samijaya Probolinggo</h1></b>
          </span>
          </a>
          {/* end logo */}
          {/* top menu */}
          <div className="navigation">
            <nav>
              <ul className="nav topnav">
                <li className={`dropdown ${CurrentState==""?"active":""}`}>
                  <Link to="/">Home</Link>
                </li>
                
                <li className={`dropdown ${CurrentState=="/About"?"active":""}`}>
                  <Link to="/About">About</Link>
                </li>
              
                <li className={`dropdown ${CurrentState=="/Product"?"active":""}`}>
                  <Link to="/Product">Product</Link>
                </li>
                <li className={`dropdown ${CurrentState=="/Contact"?"active":""}`}>
                  <Link to="/Contact">Contact Us</Link>
                </li>
              
              </ul>
            </nav>
          </div>
          {/* end menu */}
        </div>
      </div>
    </div>

  </div>
 )

}
