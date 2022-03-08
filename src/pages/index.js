import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./Styles.css"

import SEO from "./component/Seo"
export default function Home() {

  function Card_Product(){
    return(
      <div className="fullwidth-block latest-projects-section">
        <div className="container">
          <h2 className="section-title">Our Product</h2>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="project">
                <figure className="project-thumbnail"><img src="../philips1.jpg" alt="Philips Multipack" width="500" height="200"/></figure>
                <h3 className="project-title"><a href="#">Philips Multipack</a></h3>
                <p>Lampu Philips Multipack MyCare LedBulb 6W,8W,10W,12W</p>
                {/* <a href="#" className="more-link"><img src="images/arrow.png" alt /></a> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="project">
                <figure className="project-thumbnail"><img src="../xiaomi.jpg" alt="Project 2" width="500" height="200" /></figure>
                <h3 className="project-title"><a href="#">Xiao Mi Black Shark</a></h3>
                <p>Xiaomi Black Shark merupakan smartphone yang diciptakan khusus untuk main game.</p>
                {/* HP Black Shark ini menggunakan prosesor Snapdragon 845 yang dipadukan dengan grafis Adreno 630 GPU. Smartphone ini memiliki dua varian RAM yaitu RAM 6GB dengan memori internal 64GB dan RAM 8GB dengan memori internal 128GB */}
                {/* <a href="#" className="more-link"><img src="images/arrow.png" alt /></a> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="project">
                <figure className="project-thumbnail"><img src="../cosmos1.jpg" alt="Project 3" width="500" height="200"/></figure>
                <h3 className="project-title"><a href="#">Magic Com Cosmos</a></h3>
                <p>Cosmos Low Watt Rice Cooker CRJ 6601 merupakan rice coker yang memiliki fungsi sebagai penanak, penghangat, dan pengukus nasi.</p>
                {/* Lapisan pancinya anti gores dan anti lengket sehingga mudah untuk dibersihkan. */}
                {/* <a href="#" className="more-link"><img src="images/arrow.png" alt /></a> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="project">
                <figure className="project-thumbnail"><img src="../lg1.jpg" alt="Project 3" width="500" height="200"/></figure>
                <h3 className="project-title"><a href="#">LED TV LG 32inch</a></h3>
                <p>LG 32LK500BPTA adalah TV LED 32 inci dengan ketajaman gambar yang akurat dan dibekali fitur hemat energi.</p>
                {/* <a href="#" className="more-link"><img src="images/arrow.png" alt /></a> */}
              </div>
            </div>
          </div> {/* .row */}
        </div> {/* .container */}
      </div> 
    )
  }

  function Quality(){
    return(
      <div className="fullwidth-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="section-title">About Us</h3>
                <p>Samijaya Probolinggo adalah toko yang menjual berbagai peralatan elektronik mulai dari lampu, kulkas, tv, blender bahkan HP. Terima kasih telah mengunjungi website kami dan atas kepercayaan anda dalam memilih produk-produk kami. </p>
              </div>
              <div className="col-md-4">
                <h3 className="section-title">High QUality</h3>
                <p>Produk yang disediakan terjamin kualitasnya. Hal ini dapat dibuktikan dengan garansi yang diberikan toko</p>
              </div>
              <div className="col-md-4">
                <h3 className="section-title">Safety Control</h3>
                <p>Kami selalu memastikan keamanan produk yang dijualkan serta memberikan pelayanan yang baik terhadap customer</p>
              </div>
            </div>
            <hr className="separator" />
            <div className="row">
              <div className="col-md-6">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonial-slider">
                  <ul className="slides">
                    
                    <li>
                   
                      <blockquote>
                      <cite>Susi</cite>
                        <p>Sudah hampir 2 th kondisi tetap prima gambar jernih, channel digital bening banget</p>
                       
                      </blockquote>
                    </li>
                    <li>
                      <blockquote>
                      <cite>Amelia </cite>
                        <p>Barang mantap, pelayanan juga baik</p>
                       
                      </blockquote>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="section-title"></h2>
                <ul className="news">
                  <li>
                    <div className="date">Onad</div>
                    <h3 className="entry-title"><a href="#">Dapat garansi dari toko mantap</a></h3>
                  </li>
                  <li>
                    <div className="date">Mario</div>
                    <h3 className="entry-title"><a href="#">Harga produk bersaing dari toko lain</a></h3>
                  </li>
                </ul>
              </div>
            </div> 
          </div> 
        </div> 
    )
  }

  return (
    
  <div id="site-content">
  <SEO title="Index" />
    <Header/>
   
    <img src="../cobabg.jpg" alt="Project 1" width="100%" height="1000" style={{float:"center"}}/>
    
    <main className="main-content">
   
        {Card_Product()}
        {Quality()}
      
        
    </main> 

    <Footer/>
  </div>
  )
}
