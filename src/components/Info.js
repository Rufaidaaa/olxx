import React, { useState } from 'react'
import image from '../images/img2.webp'
import img from '../images/img2.png'
import { CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography,
} from "@material-ui/core";
import '../App.css';
import ClearIcon from '@material-ui/icons/Clear';
import {Carousel} from 'react-bootstrap'
function Info(){

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
 return(
     <React.Fragment>
            <Dialog className="dial"
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                  
                                    <ClearIcon onClick={handleClose} className="clear"></ClearIcon>
                           <DialogTitle id="alert-dialog-title"></DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                               <img className="d-block w-50 text-center" src={img} alt="" />
                               <h4 className=" text-center">Write a message</h4>
                               <input className="msg" type="text"  placeholder="Write your message here"/>
                               <button className="chat mt-4"  >Send Message</button>
                             
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                              
                                </DialogActions>
                            </Dialog>
     <div className="picture">
         <div className="carosel">
             <div className="inside">
     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"
    />

 
  </Carousel.Item>
</Carousel>
</div>
</div>
<div className="card">
    <h1>Rs 75,000.00</h1>
    <h6>Milking Machine bms and milking parlor available at dairy hub</h6>
    <p> Qazi Town, Lahore, Punjab</p>
    <div className="cards">
    <h5>Seller description</h5>
    <button className="chat" onClick={() => { showDetailBtnClicked(); }} >Chat with seller</button>
    
</div>
</div>

     </div>
  
    
     </React.Fragment>
 )
}

export default Info