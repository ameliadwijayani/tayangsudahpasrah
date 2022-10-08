 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function SEO({ description, meta, title }) {
   
  
   const metaDescription = description || "Samijaya Probolinggo adalah toko yang menjual berbagai peralatan elektronik mulai dari lampu, kulkas, tv, blender bahkan HP."
   const defaultTitle = `Samijaya Probolinggo Toko Elektronik Terbaik di Probolinggo`
   const keywords=`lampu,toko,elektronik,probolinggo,samijaya,hp`
   
   return (
     <Helmet
       htmlAttributes={{
         lang:"id"
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s ${defaultTitle}` : null}
       meta={[
         {
           name: `google-site-verification`,
           content: "Hp0t1O2HuU3-AI298ARQ_S13lbJMyUymz5RWHMtw6DE",
         },
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           name: `keywords`,
           content: keywords,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: "@samijayaprobolinggo" || ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     />
   )
 }
 
 SEO.defaultProps = {
   lang: `id`,
   meta: [],
   description: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default SEO

 
 