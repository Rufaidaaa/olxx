import React, {useEffect, useState} from 'react'
// import AddItem from './AddItem'
import  {Link } from "react-router-dom"

function Footer(){
    return(
        <React.Fragment>
        <div className="footer flex">
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">POPULAR CATEGORIES</h2>
                <Link to='/' className="noul noulh font s12 color">Cars</Link>
                <Link to='/' className="noul noulh font s12 color">Flats for rent</Link>
                <Link to='/' className="noul noulh font s12 color">Jobs</Link>
                <Link to='/' className="noul noulh font s12 color">Mobile Phones</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">TRENDING SEARCHES</h2>
                <Link to='/' className="noul noulh font s12 color">Bikes</Link>
                <Link to='/' className="noul noulh font s12 color">Watches</Link>
                <Link to='/' className="noul noulh font s12 color">Books</Link>
                <Link to='/' className="noul noulh font s12 color">Dogs</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">ABOUT US</h2>
                <Link to='/' className="noul noulh font s12 color">About OLX Group</Link>
                <Link to='/' className="noul noulh font s12 color">OLX Blog</Link>
                <Link to='/' className="noul noulh font s12 color">Contact Us</Link>
                <Link to='/' className="noul noulh font s12 color">OLX for Businesses</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s14 fontb color">OLXs</h2>
                <Link to='/' className="noul noulh font s12 color">Help</Link>
                <Link to='/' className="noul noulh font s12 color">Sitemap</Link>
                <Link to='/' className="noul noulh font s12 color">Legal & Privacy information</Link>
            </div>
            <div className="block flex-row">
                <h2 className="title s14 fontb color">FOLLOW US</h2>
                <Link exact   target="_blank" to="/https://www.facebook.com/olxpakistan"> <i className="fab fa-facebook s20"> </i></Link>
                <i className="fab fa-twitter-square  s20"></i>
                <i className="fas fa-play-circle s20"></i>
                <Link to=""><i className="fab fa-instagram-square s20" ></i></Link>
                <div className="flex as">
            <a href="#" ><img className="noul bl imag" src="//statics.olx.com.pk/external/base/img/appstore_2x.png" /></a>
            <a href="#" ><img className="noul bl imag" src="//statics.olx.com.pk/external/base/img/playstore_2x.png" /></a>
            </div>
            </div>
            

        </div>
        <div className="footerb flex">
            <h2 className="cfff font s12"><b>Other Countries</b> India - South Africa - Indonesia</h2>
            <h2 className="r cfff font s12"><b>Free Classifieds in Pakistan </b> .© 2006-2020 OLX</h2>
        </div>
        
        </React.Fragment>
    )
}

export default Footer;