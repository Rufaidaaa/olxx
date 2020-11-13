import React, {useEffect, useState} from 'react'
import AddItem from './AddItem'

function HomePage(){

    const [list, setList] =useState([])
    const [loading, setLoading] =useState(true)

    useEffect(() =>{
        if(loading){
            let List =[]
            for(let i=0; i< 12; i++){
                List.push(<AddItem placeholder={true} />)
            }
            setList(List)
        }
    }, list)
   
    return(
        <React.Fragment>
        <div className="home-page ">
            <div className="ad-list flex">
            {list}
            </div>
            <button className="load-more fontb c333  anim">
                Load More
            </button>
            </div>
        <div className="app-ribbon flex aic">
            <div className="img">
                <img src="https://statics.olx.com.pk/external/base/img/phone-app.png" />
            </div>
            <div className="meta">
            <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
            <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
        </div>
        <div className="links">
            <h2 className="title fontb s16 color">GET YOUR APP TODAY</h2>
            <div className="flex as">
            <a href="#" className="noul bl hey"><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" /></a>
            <a href="#" className="noul bl hey"><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" /></a>
            </div>
        </div>
        </div>
       
        </React.Fragment>
    )
}
export default HomePage