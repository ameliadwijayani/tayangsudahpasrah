import React from 'react';
import Header from "./Header"
import Footer from "./Footer"

import SEO from "./component/Seo"
export default function Contact() {
  return (
    <div id="site-content">
        
  <SEO title="Contact" />
<Header/>
    <main className="main-content">
        <div className="page">
        <div className="container">
            <a href="Product" className="button-back"><img src="./arrow-back.png" alt className="icon" />Back to the Product</a>
            <div className="row">
            <div className="col-md-8">
                <div className="map" />
                <div className="contact-detail">
                {/* <address>
                    <div className="contact-icon">
                    <img src="./icon-marker.png" className="icon" />
                    </div>
                    <p><strong>Company name INC.</strong> <br />532 Avenue Street, Omaha</p>
                </address>
                <a href="#" className="phone"><span className="contact-icon"><img src="./icon-phone.png" className="icon" /></span> +1 800 931 033</a>
                <a href="#" className="email"><span className="contact-icon"><img src="./icon-envelope.png" className="icon" /></span> contact@companyname.com</a> */}
                </div>
            </div>
            <div className="col-md-3 col-md-offset-1">
                <div className="contact-form">
                <h2 className="section-title">Write us</h2>
                <p>Dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam dolorem.</p>
                <form action="#">
                    <input type="text" placeholder="Your name.." />
                    <input type="text" placeholder="Email.." />
                    <input type="text" placeholder="website.." />
                    <textarea placeholder="Message..." defaultValue={""} />
                    <p className="text-right">
                    <button type="submit">Send message</button>
                    </p>
                </form>
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
