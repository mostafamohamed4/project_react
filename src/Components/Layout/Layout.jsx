import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default class Layout extends Component {
  render() {
    return <>
    <Navbar />
    <Outlet></Outlet>
    <Footer/>
    </>
  }
}
