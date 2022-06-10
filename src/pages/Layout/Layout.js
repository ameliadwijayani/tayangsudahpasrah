import React from 'react'
import SEO from '../Component/Seo.js'
import Footer from "./Footer.js"
import Header from "./Header.js"
import "../Styles.css"
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
