
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Link } from "react-router-dom"
import ClearIcon from '@material-ui/icons/Clear';
import {StyledFirebaseAuth} from 'react-firebaseui/StyledFirebaseAuth';
import {connect } from 'react-redux'
import { fb_login} from '../store/action'
import {get_users} from '../store/action'
import firebase from '../config/firebase'
import { google_login} from '../store/action'
import '../App.css';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
  } from "@material-ui/core";


const Header= (props) => {

    const nav = [
        { ID: 1, label: "Mobile Phones" },
        { ID: 2, label: "Cars" },
        { ID: 3, label: "Motorcycles" },
        { ID: 4, label: "Houses" },
        { ID: 5, label: "TV-Video-Audio" },
        { ID: 6, label: "Tablets" },
        { ID: 7, label: "Land and Plots" }
    ]

    const photos=[
        {
            name:'photo 1',
            url: 'https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png'

        },
        {
            name:'photo 1',
            url: 'https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png'
        },
        {
            name:'photo 1',
            url: 'https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png',
            text: "contact"
        }
    ]

    const [open, setOpen] = useState(false);
    
  const showDetailBtnClicked = () => {
  
        handleClickOpen();

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
    arrows: true
  };

  const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            console.log("user==>",user)
        }else{
            console.log("no user")
        }
    })
});

    return (
        <React.Fragment>
              <Dialog className="dial"
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                  
                                    <ClearIcon onClick={handleClose} className="clear"></ClearIcon>
                               
                                <Slider {...settings}>{
                                photos.map((photo) => {
                                    return(
                                        <div>
                                            <img width="100" src={photo.url} className="im" />
                                            <h5 className={photo.text}></h5>
                                        </div>
                                    )

                                 })} </Slider>
                               
                                <DialogTitle id="alert-dialog-title"></DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography><button className="butt" onClick={props.google_login}>Continue with google</button></Typography>
                                   
                                    <Typography><button className="but" onClick={props.fb_login} >Continue with facebook</button></Typography>
                                    <Typography><button className="butt" >Continue with email</button></Typography>
                                   
                                
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                              
                                </DialogActions>
                            </Dialog>
      
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
            <div className="header fixed flex aic">
                <div className="logo">
                    <img src={require("../images/olx.png")} />
                </div>
                <div className="location rel flex aic" >
                    <i className="fas fa-search ico s24 "></i>
                    <input className="label s15 font" placeholder="Your Location" value="" />
                        <i class="fas fa-chevron-down arrow s24 " ></i>

                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Mobile Phones and more...." className="query s15 font" />
                    <i className="fas fa-search go s24 cfff"></i>
                   
                </div>
          
                <div className="actions flex aic ">
                <Link to="/" className=" color s16 noul no fontb"  onClick={() => {
                showDetailBtnClicked();
              }} >Login</Link>
                   
                    <button className="sell flex color aic" onClick={() => {
                showDetailBtnClicked();
              }}>
                        < i className="fas fa-plus ico s16" />
                        <h2 className="s18 fontb" >Sell</h2>
                    </button>
                </div>
            </div>
            <div className="hnav fixed flex aic">
                <button className="view-cates flex aic color">
                    <h2 className="s16 font "><b>ALL CATEGORIES</b></h2>
                    <i className="fas fa-chevron-down arrow s24 " ></i>
                </button>
                {
                    nav.map(item => {
                        return (
                            <>
                            <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15">{item.label}</Link>
                          
                            </>
                        )
                    })
                }
            </div>
            <div className="hclr" />
            </nav>
            
        </React.Fragment>
    );
            

}

const mapStateToProps = (state)=>({
    current_user: state.current_user,
    // users: state.users
  })

const mapDispatchToProps =(dispatch) =>{
  return{
  fb_login: () =>dispatch(fb_login()),
  google_login: () =>dispatch(google_login()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);