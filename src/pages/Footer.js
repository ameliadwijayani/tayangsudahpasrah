import React from 'react';
export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
            <div className="pull-left">

                <address>
                <strong>Samijaya Probolinggo</strong>
                <p>Jalan Bunga Mawar no 123</p>
                </address>

                <a href="#" className="phone">+ 08123456789</a>
            </div> 
            <div className="pull-right">

                <div className="social-links">

                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>

                </div>

            </div> 

            <div className="colophon">Copyright 2022 Samijaya Probolinggo. All rights reserved.</div>

            </div> 
        </footer> 
    );
}
