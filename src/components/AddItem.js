import React from 'react'
import image from '../images/img2.webp'
import imagee from '../images/img1.webp'
import {Link} from 'react-router-dom'


function AddItem(props){

    const nav = [
        { ID: 1, label: "Mobile Phones" },
        { ID: 2, label: "Cars" },
        { ID: 3, label: "Motorcycles" },
        { ID: 4, label: "Houses" },
        { ID: 5, label: "TV-Video-Audio" },
        { ID: 6, label: "Tablets" },
        { ID: 7, label: "Land and Plots" }
    ]
   
    if("placeholder" in props){
    return(
        <Link to="/info">
    
        <div className="ad-item">
            <div>
         <img className="poster anim placeholder"  src={image} />
         
                  </div>
        
            <p className="title anim s20"> <b>Rs 45,000,00 </b></p> 
                </div>
                </Link>
    ) 
    }
   
  
}
export default AddItem