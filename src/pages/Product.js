import React from 'react';
import { graphql } from "gatsby";

import { Link } from "gatsby"
import Layout from "../Layout/Layout"
export default function Product({data}) {
  
  return (
    <Layout title="Product" >
  <div id="site-content">
   <div>
  <section id="subintro">
    <div className="jumbotron subhead" id="overview">
      <div className="container">
        <div className="row">
          <div className="span12">
            <div className="centered">
              <h3>Produk Kami</h3>
              
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
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="maincontent">
    <div className="container">
        <div class="span8">
            {data.allMarkdownRemark.edges.map(({node,index})=>{
              return(
              <article className="blog-post">
                <div className="post-heading">
                  <h3><a href="#">{node.frontmatter.title}</a></h3>
                </div>
                <div className="row">
                  <div className="span3">
                  <div class="post-image">
                 <img src={node.frontmatter.Images?.childImageSharp.gatsbyImageData.images.fallback.src } alt="img" />
                </div>
                  </div>
                  <div className="span5">
                  
                    <div className="clearfix">
                    </div>
                    <p>
                    {node.frontmatter.deskripsi}
                    </p>
                   
                  </div>
                </div>
              </article>


              )
            })}
        </div>
    </div>
  </section>
</div>

  </div>
    </Layout>

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
