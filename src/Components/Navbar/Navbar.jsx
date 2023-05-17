import React, { Component } from 'react'
// import logo from '../../../images/adidas-logo-107B082DA0-seeklogo.com.png'
// import call from '../../../images/Group 756.svg'
// import FindAStore from '../../../images/Group 753.svg'
// import Wishlist from '../../../images/Path 771.svg'
// import Login from '../../../images/Path 773.svg'
// import TrackOrder from '../../../images/Group 758.svg'
// import Search from '../../../images/Path 774.svg'
// import bard from '../../../images/Group 770.svg'
// import chart from '../../../images/Path 772.svg'
// import logo2 from '../../../images/urn aaid sc US 2186e175-b022-45db-a2f4-c9ba6e4bde30;revision=0.png'
import './Navbar.scss'
import axios from 'axios'
export default class Navbar extends Component {
  constructor() {
    super()
    this.state = { posts: [], numOfCartItems: 0 }
  }

  async componentDidMount() {
    let { data } = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/cart', {
      headers: { token: localStorage.getItem('useToken') }
    })
    console.log(data);
    // this.setState({ posts: data.data })
    // this.setState({ numOfCartItems: data.numOfCartItems });


    // let { data } = await this.props.getdata();
    this.setState({ posts: data.data.products })
    console.log(data);
    this.setState({ numOfCartItems: data.numOfCartItems })
  }

  refreshPage() {
    window.location.reload(true);
  }
  async RemoveData(productId) {
    console.log(productId);
    let { data } = await axios.delete(`https://route-ecommerce-app.vercel.app/api/v1/cart/${productId}`, {
      headers: { token: localStorage.getItem('useToken') }
    })
    this.setState({ numOfCartItems: data.numOfCartItems })
    console.log(data.data);
    this.componentDidMount(data.data)
  }



  render() {
    let { numOfCartItems } = this.state
    return <>
      {/* <h2>{numOfCartItems}</h2> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-main">
        <div className="container">
          <img src="Group 770.svg" alt="" />
          <a className="navbar-brand mx-3" href="#"><img src='urn aaid sc US 2186e175-b022-45db-a2f4-c9ba6e4bde30;revision=0.png' className='w-100' alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item  d-flex align-items-center justify-content-center">
                <i className="fa-solid text-black fa-chevron-left"></i>
                <span className="nav-link mx-2 text-black" aria-current="page" href="#">Valentine's Day offers! Buy two Get One Free <a href="" className='fw-bolder text-black'>Show Now</a></span>
                <i className="fa-solid text-black fa-chevron-right"></i>
              </li>

            </ul>
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3 d-flex align-items-center justify-content-center ">
                <img src="Group 756.svg" alt="" />
                <a className="nav-link text-black  fw-bolder " aria-current="page" href="#">Contact Us</a>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                <img src="Group 758.svg" alt="" />
                <a className="nav-link text-black fw-bolder " aria-current="page" href="#">Track Order</a>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                <img src='Group 753.svg' alt="" />
                <a className="nav-link text-black fw-bolder " aria-current="page" href="#">Find A Store</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <form className=" position-relative">
            <img src='Path 774.svg' className='imgsearch' alt="" />
            {/* <span className='textsearch' alt="">search</span> */}
            <input className="form-control me-2 rounded-5 fw-bold ps-5 " type="search" placeholder='search' aria-label="Search" />
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul className="navbar-nav ms-auto mb-2 text-center mb-lg-0">
              <a className="navbar-brand" href="#"><img src='adidas-logo-107B082DA0-seeklogo.com.png' className='w-25' alt="" />
              </a>
            </ul>

            <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
              <li className="nav-item d-flex align-items-center">

                <span type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className='position-relative d-flex align-items-center justify-content-center'>
                    <img src='Path 772.svg' alt="" />
                    <p className='position-absolute mx-3   font-sm bg-main text-black top-0 translate-middle badge rounded-pill'>{this.state.numOfCartItems}</p>
                    <span className='mx-2'>Carts </span>
                  </div>
                </span>
                <div className='mx-3 d-flex align-items-center justify-content-center'>
                  <img src='Path 771.svg' alt="" />
                  <span className='mx-2'>Wishlist</span>
                </div>
                <div className='mx-3  d-flex align-items-center justify-content-center'>
                  <img src='Path 773.svg' alt="" />
                  <span className='mx-2'>Login</span>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav >
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4 ">
                <a className="nav-link  text-white " aria-current="page" href="#">Men</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link nav-margin text-white " aria-current="page" href="#">Women</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link nav-margin text-white " aria-current="page" href="#">Unisex</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link nav-margin text-white " aria-current="page" href="#">Kids</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link nav-margin text-white " aria-current="page" href="#">Best sellers</a>
              </li>
              <li className="nav-item  mx-4">
                <a className="nav-link nav-margin text-white " aria-current="page" href="#">New Arrivals</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link nav-margin bg-frist" aria-current="page" href="#">Other</a>
              </li>
            </ul>


          </div>
        </div>
      </nav>

      {/* this.state.posts */}
      {/* meduol */}


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title ms-auto model-color fw-bold" id="exampleModalLabel">My Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='head mb-3'>
                <h5 className='fw-bold '>Cart Summary</h5>

              </div>
              {numOfCartItems == 0 ? <>
                <div className='cart'>
                  <div className='row py-3'>
                    <h5 className='fw-bold'>You have no items yet..</h5>

                  </div>
                </div>
              </> : <>
                <div className='cart'>
                  {this.state.posts?.map((product, index) => {
                    return <div key={index} className=''>
                      <div className='row py-3 bordercart mb-3'>
                        <div className='col-lg-4 col-md-10'>
                          <div className='images'>
                            <img src={product.product.imageCover} alt="" className='w-100 px-3' />
                          </div>
                        </div>
                        <div className='col-lg-8 col-md-10'>
                          <div className='title-model'>
                            <span className='fw-bold'>{product.product.title}</span>
                            <p className='fw-bold py-2'>Quantity:{product.count}</p>
                          </div>
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='price'>
                                <h3 className='price-color fw-bold'>{product.count * product.price} LE</h3>

                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <button onClick={() => { this.RemoveData(product.product._id) }} className='btn fw-bold rounded-5 btn-bg '>Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='Total'>
                        <h2 className='price-color fw-bold text-center py-4'>Total: {product.count * product.price} LE</h2>

                      </div>
                    </div>
                  })}
                  <div className='row g-3'>
                    <div className='col-lg-6 col-md-12'>
                      <button className='btn w-100 rounded-5 py-2 btn-bg '>Review Cart</button>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      <button className='btn w-100 rounded-5 py-2  text-white price-bg'>Complete Checkout</button>

                    </div>
                  </div>
                </div>
              </>
              }
            </div>

         
          </div>
        </div>
      </div>


    </>
  }
}
