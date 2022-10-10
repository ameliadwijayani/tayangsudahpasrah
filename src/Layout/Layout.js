import React from 'react'
import SEO from './Seo'
import Footer from "./Footer"
import Header from "./Header"
import "../../assets/css/bootstrap.css" 
import "../../assets/css/bootstrap-responsive.css" 
import "../../assets/css/docs.css" 
import "../../assets/js/google-code-prettify/prettify.css" 
import "../../assets/color/default.css" 
import "../../assets/css/prettyPhoto.css" 
import "../../assets/css/sequence.css" 
import "../../assets/css/flexslider.css" 


export default function Layout({children, description, title}) {
  return (
    <div>
        <SEO description={description} title={title}/>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
