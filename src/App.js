import React, { Component } from 'react'


import'./App.css'

import Navigation from './components/navbar'
import Footer from './components/footer'


export default class App extends Component {

  render() {
    return (
      <div>
        <Navigation/> 
        <Footer/>
      </div>
    )
  }
}