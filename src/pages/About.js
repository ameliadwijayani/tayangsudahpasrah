import React from "react"
import Layout from "../Layout/Layout"

import {Link} from 'gatsby'
export default function About() {
  return (
   <Layout title="title">
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
                    <i className="icon-minus" /> Database management</a>
                </div>
                <div id="collapseOne" className="accordion-body collapse in">
                  <div className="accordion-inner">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                    <i className="icon-plus" /> UI development</a>
                </div>
                <div id="collapseTwo" className="accordion-body collapse">
                  <div className="accordion-inner">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
                    <i className="icon-plus" /> Social media</a>
                </div>
                <div id="collapseThree" className="accordion-body collapse">
                  <div className="accordion-inner">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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