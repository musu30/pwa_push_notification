import React ,{useEffect} from 'react';

import './App.css';
import {Navbar, Nav} from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Users from './Users'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
// import messaging from './firebase'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

function App() {

    function requestPermission() {
        console.log('Requesting permission...');
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
          }
        })}

const firebaseConfig = {
    apiKey: "AIzaSyBPHUoGP2DGBRGYo6Y0RhZMrIciqjAJo-U",
    authDomain: "pwa-app-f662f.firebaseapp.com",
    projectId: "pwa-app-f662f",
    storageBucket: "pwa-app-f662f.appspot.com",
    messagingSenderId: "368233715021",
    appId: "1:368233715021:web:94d53d6e7ba7bc6f945304",
    measurementId: "G-163CPKNKJY"
  };
  
  // Initialize Firebase
  const firebaseApp=initializeApp(firebaseConfig);
  const messaging = getMessaging(firebaseApp);
    useEffect(()=>{


     requestPermission();
     getToken(messaging, { vapidKey: 'BMZ8K4wcoa3_0DS05LYEj24a6vSttshG2NTMkj8O_L1-sW9PZ-_xsrHKQUUwHUAUTG_m-aDSkcn7DyYBMJPZnIM' }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.warn("token",currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
      
        // const msg=messaging;
        // msg.requestPermission().then(()=>{
        //   return msg.getToken();
        // }).then((data)=>{
        //   console.warn("token",data)
        // })
      })
    return (
        <div className="App">
            <Router>
                <Navbar bg="primary" variant="dark">

                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                       
                            <Link to="/"><span style={{color:"black"}}>Home</span></Link>
                   
                            <Link to="/about"><span style={{color:"black"}}>Features</span></Link>
                
                            <Link to="/users"><span style={{color:"black"}}>Pricing</span></Link>
                      
                    </Nav>

                </Navbar>
                <Routes >
                    <Route exact path="/"
                       element={<Home />} ></Route>
                    <Route path="/about"
                       element={<About />} ></Route>
                    <Route path="/users"
                      element={<Users />}  ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
