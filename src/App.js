import React from 'react';
import './props.css'
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import HomePage from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Info from './components/Info'
import Chat from './components/Chat'
// import Routers from './components/Router'
// import {DataProvider} from './components/context'


function App() {
  return (
   <BrowserRouter>
   {/* <Routers /> */}
   <Header />
   <Route exact path="/" component={HomePage} />
   <Route exact path="/info" component={Info} />
   <Route exact path="/chat" component={Chat} />
   {/* <Route exact path="https://www.facebook.com/olxpakistan" /> */}


 
   <Footer />
   
    </BrowserRouter>
    
  );
}

export default App;
