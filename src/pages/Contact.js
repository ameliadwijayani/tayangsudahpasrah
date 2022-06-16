import React from 'react';
import Layout from "../Layout/Layout"
import { Link } from "gatsby"
export default function Contact() {
  return (
    
    <Layout title="Contact" >
      <div>
  <section id="subintro">
    <div className="jumbotron subhead" id="overview">
      <div className="container">
        <div className="row">
          <div className="span12">
            <div className="centered">
              <h3>Get in Touch</h3>
              <p>
                Want to get in touch? We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="breadcrumb">
    <div className="container">
      <div className="row">
        <div className="span12">
          <ul className="breadcrumb notop">
            <li><Link to="/">Home</Link><span className="divider">/</span></li>
            <li className="active">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="maincontent">
    <div className="container">
      <div className="row">
        <div className="span4">
          <aside>
            <div className="widget">
              <h4>Get in touch with us</h4>
              <ul>
                <li><label><strong>Phone : </strong></label>
                  <p>
                    +08123456789
                  </p>
                </li>
                <li><label><strong>Email : </strong></label>
                  <p>
                   samijayaprobolinggo@gmail.com
                  </p>
                </li>
                <li><label><strong>Adress : </strong></label>
                  <p>
                    Jalan Bunga Mawar No 123, Probolinggo, Jawa Timur, Indonesia
                  </p>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h4>Social network</h4>
              <ul className="social-links">
                <li><Link to="/" title="Twitter"><i className="icon-rounded icon-32 icon-twitter" /></Link></li>
                <li><Link to="/" title="Facebook"><i className="icon-rounded icon-32 icon-facebook" /></Link></li>
                <li><Link to="/" title="Google plus"><i className="icon-rounded icon-32 icon-google-plus" /></Link></li>
                <li><Link to="/" title="Linkedin"><i className="icon-rounded icon-32 icon-linkedin" /></Link></li>
                <li><Link to="/" title="Pinterest"><i className="icon-rounded icon-32 icon-pinterest" /></Link></li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="span8">
        <img alt="Img" src="/countactus.jpg" width="500" height="320"/>
          <div className="spacer30" />
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage" />
          
        </div>
      </div>
    </div>
  </section>
</div>

    </Layout>

  );
}
