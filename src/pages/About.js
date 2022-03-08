import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Styles.css"
import SEO from "./component/Seo"
export default function About() {
  return <div id="site-content">
  <SEO title="About" />
  <Header/>

  <Carousel
    dynamicHeight={true}
    style={{ 
      minHeight:"50%"
     }}
  >
      <div>
          <img src="../cosmos1.jpg" />
          <p className="legend">Legend 1</p>
      </div>
      <div>
           <img src="../philips3.jpg" />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src="../lg3.jpg" />
          <p className="legend">Legend 3</p>
      </div>
  </Carousel>
 

  <main className="main-content">
    <div className="page">
      <div className="container">
        <h2 className="entry-title">About The Company</h2>
        
        <p>Samijaya Probolinggo adalah toko yang menjual berbagai peralatan elektronik mulai dari lampu, kulkas, tv, blender bahkan HP. Kami berdiri pada tahun 2008 di Kota Probolinggo dan telah menjual produk-produk andalan yang telah digunakan di seluruh pelosok tanah air. Terima kasih telah mengunjungi website kami dan atas kepercayaan anda dalam memilih produk-produk kami.</p>
        
        
        <hr className="separator"/>
        
        <h2 className="sectiont-title">Beberapa keunggulan dari Kami</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="feature-numbered">
              <div className="num">1</div>
              <h2 className="feature-title">HARGA BERSAING</h2>
              <p>Kami dapat menjamin bahwa harga barang yang dijual di toko kami bersahabat </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature-numbered">
              <div className="num">2</div>
              <h2 className="feature-title">Produk bergaransi</h2>
              <p>Produk elektronik yang kami jual bergaransi dari toko</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature-numbered">
              <div className="num">3</div>
              <h2 className="feature-title">Customer Service Terjamin</h2>
              <p>Kami selalu berusaha untuk meningkatkan kepuasan customer</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature-numbered">
              <div className="num">4</div>
              <h2 className="feature-title">Produk Lengkap</h2>
              <p>Semua produk dapat dicari mulai dari TV, Blender, HP, Lampu</p>
            </div>
          </div>
        </div>
        
        <hr className="separator"/>
        
        <h2 className="section-title">testimonials</h2>
        <div className="row">
          
          <div className="col-md-4">
            <blockquote className="testimonial">
            <cite>Susi</cite>
            <p>Sudah hampir 2 th kondisi tetap prima gambar jernih, channel digital bening banget</p>
            </blockquote>
            <blockquote className="testimonial">
            <cite>Amelia </cite>
            <p>Barang mantap, pelayanan juga baik</p>
                       
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote className="testimonial">
            <cite>Onad </cite>
             <p>Dapat garansi dari toko mantap</p>
                       
            </blockquote>
            <blockquote className="testimonial">
            <cite>Mario </cite>
            <p>Harga produk bersaing dari toko lain</p>
                       
            </blockquote>
          </div>
        </div>
      </div>
    </div> 

  </main>

  <Footer/>
</div>
}
