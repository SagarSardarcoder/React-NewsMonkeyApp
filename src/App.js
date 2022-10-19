import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize= 13
  apiKey = "cffbaa6ff8ec4c63960dee59cff5e1fc"
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/"  element = {<News pageSize={this.pageSize} apiKey={this.apiKey} country="in"/>}/>
          <Route exact path="/Business"  element = {<News key="business" apiKey={this.apiKey} country="in" category="business"/>}/>
          <Route exact path="/Entertainment" element = {<News key="entertainment" apiKey={this.apiKey} country="in" category="entertainment"/>}/>
          <Route exact path="/Health" element = {<News key="health" apiKey={this.apiKey} country="in" category="health"/>}/>
          <Route exact path="/Science" element = {<News key="science" apiKey={this.apiKey} country="in" category="science"/>}/>
          <Route exact path="/Sports" element = {<News key="sports" apiKey={this.apiKey} country="in" category="sports"/>}/>
          <Route exact path="/Technology" element = {<News key="technology" apiKey={this.apiKey} country="in" category="technology"/>}/>
           {/* <Route exact path="/about" element={<About />}/> */}
           {/* <Route exact path="/about" element={<Contact Us />}/> */}
           
        </Routes>
        
      </div>
      </Router>
    )
  }
}
