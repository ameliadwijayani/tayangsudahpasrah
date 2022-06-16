import React from "react"
import Layout from "../Layout/Layout"
import { graphql } from "gatsby";
export default function Home({data}) {
  let ctr=0;

  function Card_Product(){
    return(
      
      <section id="maincontent">
        <div className="container">
          <div className="row">
            <div className="span12">
              <article>
                <div className="heading">
                  <h1>Single portfolio name here</h1>
                </div>
                <div className="clearfix">
                </div>
                <div className="row">
                  <div className="span12">
                    {/* start flexslider */}
                          <img src="/gambarbg.webp" alt="img" />
                    {/* end flexslider */}
                    
                  </div>
                </div>
              </article>
              {/* end article full post */}
            </div>
          </div>
        </div>
      </section>



    )
  }

  function Quality(){
    return(
      <section id="maincontent">
  <div className="container">
    <div className="row">
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-suitcase left active" />
        <h2>Good Quality</h2>
        <div className="dotted_line">
        </div>
        <p className="left">
        Sebagai salah satu toko elektronik terkemuka di bidang perlampuan dan perangkat listrik, kami selalu berinovasi penuh untuk meningkatkan kualitas dan memperluas jangkauan pasar agar menjadi lebih baik.
        </p>
        
      </div>
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-plane left" />
        <h2>Lot of Product</h2>
        <div className="dotted_line">
        </div>
        <p className="left">
        Kami berorientasi pada produksi dan penjualan produk perlampuan dan perangkat listrik yang bervariasi, mulai dari Lampu, TV, Handphone hingga perluasan untuk produk selanjutnya.
        </p>
       
      </div>
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-leaf left" />
        <h2>Our Goal</h2>
        <div className="dotted_line">
        </div>
        <p className="left">
        Misi utama kami adalah selain terus menyediakan produk dengan kualitas terjamin dan harga yang kompetitif juga selalu berusaha memberikan layanan terbaik untuk setiap konsumen
        </p>
       
      </div>
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-wrench left" />
        <h2>With latest technology</h2>
        <div className="dotted_line">
        </div>
        <p className="left">
         Produk-produk eLektronik telah melalui serangkaian pengujian yang beragam serta proses inspeksi yang ketat guna memberikan jaminan kepuasan konsumen.
        </p>
        
      </div>
    </div>
    <div className="row">
      <div className="span12">
        <div className="tagline centered">
          <div className="row">
            <div className="span12">
              <div className="tagline_text">
                <h2>Don't miss this special offer for limited time only!</h2>
                <p>
                  Lorem ipsum dolor sit amet, vix ceteros noluisse intellegat ne, ex nec insolens liberavisse, no adhuc causae nominati duo.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        {/* end tagline */}
      </div>
    </div>
    <div className="row">
      <div className="home-posts">
        <div className="span12">
          <h3>Recent Product Posts</h3>
        </div>
        {data.allMarkdownRemark.edges.map(({node,index})=>{
              ctr++;
              if(ctr>4){return;}
              return(
              
              <div className="span3">
                <div className="post-image">
                 <img src={node.frontmatter.Images?.childImageSharp.gatsbyImageData.images.fallback.src } alt="img" />
                </div>
                <div className="entry-meta">
               <i className="icon-square icon-48 icon-picture left" />
                  <span className="date">{node.frontmatter.title}</span>
                </div>
                {/* end .entry-meta */}
                <div className="entry-body">
                    <h4 className="title">Amazing video post format</h4>
                  <p>
                    {node.frontmatter.deskripsi}
                  </p>
                </div>
                {/* end .entry-body */}
                <div className="clear">
                </div>
              </div>


              )
            })}
      </div>
    </div>
  </div>
</section>

    )
  }

  return (
    <Layout title="Home" >

      <div id="site-content">
          {/* <img alt="Img" src="../cobabg.jpg" width="100%" height="1000" style={{float:"center"}}/> */}
          <main className="main-content">
            {Card_Product()}
            {Quality()}
          </main> 

        </div>
    </Layout>
  )
}


export const pageQuery = graphql`
query  {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          Images {
            childImageSharp {
              
              gatsbyImageData(
                height : 220
                width:300
              )
            }
          }
          
          deskripsi
          title
        }
      }
    }
  }
}
`;
