import React from 'react';
import Layout from "./Layout/Layout"
import { Link } from "gatsby"
export default function Contact() {
  return (
    <Layout title="Contact" >
      <div id="site-content">
        <main className="main-content">
          <div className="page">
            <div className="container">
                <Link to="/Product" className="button-back"><img alt="Img" src="/arrow-back.png"  className="icon" />Back to the Product</Link>
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-detail">
                      <h2 className="section-title">Get in Touch</h2>
                      <span>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</span><br/>

                      <div className="row">
                        <div className="col-md-4">
                          <img alt="Img" src="/phoneee.png"   width="100" height="100"/>
                        </div>
                        <div className="col-md-4">
                          <img alt="Img" src="/email.jpg"   width="100" height="100"/><br/>
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
                    </div>
                  </div>
                  <div className="col-md-3 col-md-offset-1">
                    <div className="contact-form">
                      <img alt="Img" src="/countactus.jpg" width="500" height="320"/>
                    </div>
                  </div>
                </div>
            </div>
          </div> 
        </main> 
      </div>
    </Layout>

  );
}
