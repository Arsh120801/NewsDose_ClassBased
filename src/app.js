import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/news';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  country='us';
  pagesize=9;
  apikey="5cccccdbca494e04bd41f974523ffbac";
  constructor(){
    super();
    this.state={
      cntry:this.country,
      pgsz:this.pagesize,
      apikey:this.apikey,
    }
  }
  setcountry=(e)=>{
    e.preventDefault();
    let tempval=e.target.value;
    this.setState({
      cntry:tempval,
    })
  }
  setpagesize=(e)=>{
    e.preventDefault();
    let tempval=parseInt(e.target.value);
    this.setState({
      pgsz:tempval,
    })
  }
  render() {
    return (
      <div>   
        <Router>     
        <Navbar/>
        <div className='row my-4 justify-content-center'>
          <div className="input-group mb-3" style={{width : 25 +"rem"}}>
            
            <select className="form-select" id="country" onChange={this.setcountry} aria-label="Example select with button addon">
              <option>Country</option>
              <option value='in'>India</option>
              <option value='us'>USA</option>
              <option value='au'>Australia</option>
              <option value='fr'>France</option>
              <option value='gb'>United Kingdom</option>
              <option value='nz'>New Zealand</option>
            </select>
          </div>
          <div className="input-group mb-3" style={{width : 25 +"rem"}}>
            <select className="form-select" id="pagesize" onChange={this.setpagesize} aria-label="Example select with button addon">
              <option>Page Size</option>
              <option value="3">Three</option>
              <option value="6">Six</option>
              <option value="9">Nine</option>
              <option value="12">Twelve</option>
              <option value="15">Nine</option>
              <option value="18">Eighteen</option>
            </select>
          </div>
        </div>
          <Routes>
            <Route exact path="/" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz}  key='general' category='general'/>} />
            <Route exact path="/sports" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz} key='sports' category='sports'/>} />
            <Route exact path="/business" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz} key='business' category='business'/>} />
            <Route exact path="/science" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz} key='science' category='science'/>} />
            <Route exact path="/technology" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz} key='technology' category='technology'/>} />
            <Route exact path="/entertainment" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz} key='entertainment' category='entertainment'/>} />
            <Route exact path="/health" element={<News country={this.state.cntry} apikey={this.state.apikey} pagesize={this.state.pgsz} key='health' category='health'/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

