import React from 'react'
import SEO from '../Component/Seo'
import Footer from "./Footer"
import Header from "./Header"
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
