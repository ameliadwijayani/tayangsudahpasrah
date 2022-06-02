import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "gatsby"
import SEO from "./component/Seo"
export default function Contact() {
  return (
    <div id="site-content">
        
  <SEO title="Contact" />
<Header/>
    <main className="main-content">
        <div className="page">
        <div className="container">
            <Link to="/Product" className="button-back"><img src="/arrow-back.png" alt className="icon" />Back to the Product</Link>
            <div className="row">
            <div className="col-md-6">
                
                <div className="contact-detail">
                <h2 className="section-title">Get in Touch</h2>
                <span>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</span><br/>
                <div className="row">
                  <div className="col-md-4">
                    <img src="/phoneee.png" alt=""  width="100" height="100"/>
                  </div>
                  <div className="col-md-4">
                    <img src="/email.jpg" alt=""  width="100" height="100"/><br/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                <span>+ 08123456789</span>
                  </div>
                  <div className="col-md-4">
                <span>samijayaprobolinggo@gmail.com</span>
                  </div>
                </div>
                {/* <address>
                    <div className="contact-icon">
                    <img src="/icon-marker.png" className="icon" />
                    </div>
                    <p><strong>Company name INC.</strong> <br />532 Avenue Street, Omaha</p>
                </address>
                <a href="#" className="phone"><span className="contact-icon"><img src="/icon-phone.png" className="icon" /></span> +1 800 931 033</a>
                <a href="#" className="email"><span className="contact-icon"><img src="/icon-envelope.png" className="icon" /></span> contact@companyname.com</a> */}
                </div>
            </div>
            <div className="col-md-3 col-md-offset-1">
                <div className="contact-form">
                <img src="/countactus.jpg" alt=""  width="500" height="320"/>
               
                </div>
            </div>
            </div>
        </div>
        </div> 
    </main> 
   
    <Footer/> 
    </div>

  );
}
