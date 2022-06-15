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
                  <h4>Single portfolio name here</h4>
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
        <h4>Responsive bootstrap</h4>
        <div className="dotted_line">
        </div>
        <p className="left">
          Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
        </p>
        <a href="#">Learn more</a>
      </div>
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-plane left" />
        <h4>Lot of features</h4>
        <div className="dotted_line">
        </div>
        <p className="left">
          Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
        </p>
        <a href="#">Learn more</a>
      </div>
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-leaf left" />
        <h4>Multipurpose template</h4>
        <div className="dotted_line">
        </div>
        <p className="left">
          Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
        </p>
        <a href="#">Learn more</a>
      </div>
      <div className="span3 features">
        <i className="icon-circled icon-32 icon-wrench left" />
        <h4>With latest technology</h4>
        <div className="dotted_line">
        </div>
        <p className="left">
          Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
        </p>
        <a href="#">Learn more</a>
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
                    <h5 className="title">Amazing video post format</h5>
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
