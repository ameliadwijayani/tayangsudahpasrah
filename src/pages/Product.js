import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import { graphql } from "gatsby";

import SEO from "./component/Seo"
export default function Product({data}) {
  return (
  <div id="site-content">
    
  <SEO title="Product" />
  <Header/>
  <main className="main-content">
    <div className="page">
      <div className="container">
        <h2 className="entry-title">Produk Kami</h2>
       
        <div className="filterable-items">

        {data.allMarkdownRemark.edges.map(({node})=>{
          return(
            <div className="project-item filterable-item shopping-center">
              <figure className="featured-image">
                <a href="project-single.html">
                  <img src={node.frontmatter.Images.childImageSharp.gatsbyImageData.images.fallback.src }alt="#" />
                  </a>
                <figcaption>
                  <h2 className="project-title">{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.deskripsi}</p>
                </figcaption>
              </figure>
            </div>
          )
        })

        }

          

        </div>
      </div>
    </div>
  </main>
  <Footer/>
  </div>

  );
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
