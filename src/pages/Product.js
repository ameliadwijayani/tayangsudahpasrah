// import React from 'react';
// import { graphql } from "gatsby";

// import Layout from "./Layout/Layout"
// export default function Product({data}) {
//   return (
//     <Layout title="Product" >
      
//   <div id="site-content">
    
//   <main className="main-content">
//     <div className="page">
//       <div className="container">
//         <h2 className="entry-title">Produk Kami</h2>
       
//         <div className="filterable-items">

//         {data.allMarkdownRemark.edges.map(({node})=>{
//           return(
//             <div  className="project-item filterable-item shopping-center" style={{ widht:"30% !important" }}>
//               <figure className="featured-image">
//                 <a href="project-single.html">
//                   <img alt="Img" src={node.frontmatter.Images?.childImageSharp.gatsbyImageData.images.fallback.src } />
//                   {/* <img alt="Img" src={node.frontmatter.images?.childImageSharp.gatsbyImageData.images.fallback.src }alt="" /> */}
//                   </a>
//                 <figcaption>
//                   <h2 className="project-title">{node.frontmatter.title}</h2>
//                   <p>{node.frontmatter.deskripsi.substr(0,75)}</p>
//                 </figcaption>
//               </figure>
//             </div>
//           )
//         })

//         }

          

//         </div>
//       </div>
//     </div>
//   </main>
//   </div>
//     </Layout>

//   );
// }


// export const pageQuery = graphql`
// query  {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           Images {
//             childImageSharp {
              
//               gatsbyImageData(
//                 height : 220
//                 width:300
//               )
//             }
//           }
          
//           deskripsi
//           title
//         }
//       }
//     }
//   }
// }
// `;
