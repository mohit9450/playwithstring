import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function removeBodyClasses(){
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
}
function App() {
  const [darktext,setdarktext] = useState("light")
  const toggleMode = (cls)=>{
    console.log(darktext)
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    setdarktext(cls);
    if(darktext === "light"){
      setdarktext("dark")
    }
    else if(darktext === "dark"){
      setdarktext("light")
    }
    }
  
  return (
<>
<Router>
<Navbar about="abouts" mode={darktext} toggleMode={toggleMode}/>
<Alert text="this is alert please safe himself"/>
<div className="container">
{/* <TextForm heading = "react heading"/> */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading = "react heading"/>
          </Route>
        </Switch>
{/* <About/> */}

</div>
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      </Router>
</>


  );
}

export default App;
