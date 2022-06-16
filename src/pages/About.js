import React from "react"
import Layout from "../Layout/Layout"

import {Link} from 'gatsby'
export default function About() {
  return (
   <Layout title="About">
    <section id="subintro">
      <div className="jumbotron subhead" id="overview">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="centered">
                <h3>About us</h3>
                <p>

                Samijaya Probolinggo adalah toko yang menjual berbagai peralatan elektronik mulai dari lampu, kulkas, tv, blender bahkan HP. Kami berdiri pada tahun 2008 di Kota Probolinggo dan telah menjual produk-produk andalan yang telah digunakan di seluruh pelosok tanah air. Terima kasih telah mengunjungi website kami dan atas kepercayaan anda dalam memilih produk-produk kami.
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
              <li><Link to="/">Home</Link><span className="divider"></span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="maincontent">
      <div className="container">
        <div className="row">
        <h3>Beberapa Keunggulan Dari Kami</h3>
          <div className="span4">
            <div className="well">
              <div className="centered">
            
                <i className="icon-circled icon-64 icon-suitcase active" />
                <h4>Harga Bersaing</h4>
                <div className="dotted_line">
                </div>
                <p>
                Kami dapat menjamin bahwa harga barang yang dijual di toko kami bersahabat
                </p>
              </div>
            </div>
          </div>
          <div className="span4">
            <div className="well">
              <div className="centered">
                <i className="icon-circled icon-64 icon-leaf active" />
                <h4>Produk Bergaransi</h4>
                <div className="dotted_line">
                </div>
                <p>
                Produk elektronik yang kami jual bergaransi dari toko
                </p>
              </div>
            </div>
          </div>
          <div className="span4">
            <div className="well">
              <div className="centered">
                <i className="icon-circled icon-64 icon-coffee active" />
                <h4>Customer Service Terjamin</h4>
                <div className="dotted_line">
                </div>
                <p>
                Produk elektronik yang kami jual bergaransi dari toko
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="span12">
            <div className="divider">
            </div>
          </div>
        </div>
        <div className="row">
          <div className="span12">
            <h4>Our services</h4>
            {/* start: Accordion */}
            <div className="accordion" id="accordion2">
              <div className="accordion-group">
                <div className="accordion-heading">
                  <a className="accordion-toggle active" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                    <i className="icon-minus" /> Garansi Produk</a>
                </div>
                <div id="collapseOne" className="accordion-body collapse in">
                  <div className="accordion-inner">
                  Jika anda ingin mendapatkan service dari toko kami. Kami memberikan service selama 1 tahun dengan berbagai persyaratan. Untuk bisa mengklaim garansi yang diperlukan salah satunya yaitu membawa kartu garansi.
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                    <i className="icon-plus" /> Pelayanan Terjamin</a>
                </div>
                <div id="collapseTwo" className="accordion-body collapse in">
                  <div className="accordion-inner">
                  Jika pelayan kami tidak tersenyum dan mengucapkan terima kasih saat memberikan nota pembelian. Maka customer berhak mendapatkan gula 1 kilogram gratis.
                  </div>
                </div>
              </div>
             
            </div>
            {/*end: Accordion */}
          </div>
        </div>
      </div>
    </section>
  </Layout>

  )
}