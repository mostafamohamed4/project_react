import axios, { Axios } from 'axios';
import React, { Component } from 'react'
import './Shopping.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import img1 from '../../images/1680395220407-cover.jpeg'
import img2 from '../../images/1680395220692-2.jpeg'
import img3 from '../../images/1680395220693-3.jpeg'
import img4 from '../../images/1680395220713-4.jpeg'
export default class Shopping extends Component {

    constructor() {
        super();

        this.state = { posts: [], loading: true, error: null, images: [0], numOfCartItems: 0 }
    }

    // slider(e) {
    //     const images = e.target.getAttribute('src')
    //     console.log(this.setState.images({...images,images }));
    // }


    async getprodectdetials() {
        let { data } = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/products/6428cbd5dc1175abc65ca037')
        localStorage.setItem('useToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjhiZjVlZDhlNDcwNWFlYjliMTIxYyIsIm5hbWUiOiJtb3N0YWZhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODM5ODk1NDMsImV4cCI6MTY5MTc2NTU0M30.oU37j4-n_ppj-7l1p6e2VBPVDuTH_gAWClMsCXLSxBo')
        this.setState({ posts: data.data })


    }


    async addtocart(productId) {

        let { data } = await axios.post('https://route-ecommerce-app.vercel.app/api/v1/cart', {
            productId: productId,

        }, {
            headers: { token: localStorage.getItem('useToken') }
        })
        console.log(data);
        this.refreshPage(true)
    }
    refreshPage() {
        window.location.reload(false);
    }

    async componentDidMount() {

        setTimeout(() => {
            const posts = this.getprodectdetials()
            this.setState({ posts, loading: false })
        }, 2000)
    }









    render() {

        const { loading, posts, error, images } = this.state
        if (loading) {
            return <><div className='loading  d-flex align-items-center justify-content-center  position-fixed end-0  start-0 bottom-0 '>
                <div>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>      </div>

            </>
        }
        if (error) {
            return <>
                <div>error:{error.message}</div>
            </>

        }

        return <>
            <section className='shopping'>
                <div className='container'>
                    <div className='row  pt-5 g-3'>
                        <div className='col-lg-5 col-md-10 m-auto'>
                            {/* <div className='w-100 mx-auto px-3' id="carouselExampleIndicators" data-bs-ride="carousel">
                                {this.state.images == null ? <img src={this.state.posts.imageCover} className='w-100' height={560} alt="" /> :
                                    <img src={this.state.images} className='w-100' height={560} alt="" />
                                }
                                <img src={this.state.posts.imageCover} id='myImages' className='w-100' height={560} alt="" />
                                <div className='d-flex '>
                                    {this.state.posts?.images?.map((element, index) => {
                                        return <div key={index}> <img src={element} onClick={this.slider} className='w-100 my-3 px-1 cursor-pointer' alt="" />
                                        </div>
                                    })}
                                </div>
                            </div> */}
                            <Carousel >



                                <div className='w-100 my-3 px-3 cursor-pointer'>
                                    <img src={img1}  alt="" />
                                </div>
                                <div>
                                    <img src={img2}  alt="" />
                                </div>
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                                <div>
                                    <img src={img4} alt="" />
                                </div>
                            </Carousel>

                        </div>
                        <div className='col-lg-7 col-md-12 px-1'>
                            <div className='text'>
                                <h3 className='text-main fw-bold'>{this.state.posts.title}</h3>
                                <p className='mt-2 mb-1 main fw-bolder'>{this.state.posts?.category?.name?.split(' ').slice(0, 1).join(' ')}</p>
                            </div>
                            <div className='icon'>
                                <i className="fa-solid fa-star rating-color"></i>
                                <i className="fa-solid fa-star rating-color"></i>
                                <i className="fa-solid fa-star rating-color"></i>
                                <i className="fa-regular fa-star-half-stroke rating-color"></i>
                                <i className="fa-regular fa-star rating-color"></i>
                                <span className='text-black fw-bolder px-3 font-l'>{this.state.posts?.ratingsAverage} of 5</span>  </div>

                            <div className='d-flex align-items-center pb-2'>
                                <h2 className='primary-color fw-bolder'>{this.state.posts?.price} LE</h2>
                                <span className='main text-decoration-line-through px-4 fw-bold'>{this.state.posts?.price} EGP</span>
                                <div className=' rating-bg px-2 fw-bold'><span>30%off</span></div>
                            </div>
                            <div className='size my-2 py-3'>
                                <h2 className='fw-bold py-2'>Size</h2>
                                <div className='d-flex align-items-center'>
                                    <button className='sizeing  mx-1 '><span>Small</span></button>
                                    <button className='sizeing  mx-1'><span>Medium</span></button>
                                    <button className='sizeing  mx-1'><span>Large</span></button>
                                    <button className='sizeing  mx-1'><span>x-large</span></button>
                                    <button className='sizeing  ms-1'><span>xx-large</span></button>
                                </div>
                            </div>

                            <div className='color my-2 py-3'>
                                <h2 className='fw-bold py-2'>Color</h2>
                                <div className='d-flex align-items-center'>
                                    <img src={this.state.posts.imageCover} className='coloring  me-2 ' />
                                    <img src={this.state.posts.imageCover} className='coloring  ms-2 ' />
                                </div>
                            </div>
                            <div className='Quantity my-2 py-3'>
                                <h2 className='fw-bold py-3'>Quantity</h2>
                                <div className='bord d-flex justify-content-between align-items-center'>
                                    <button className='icon ms-1  rounded-5 border-main bg-main fw-bold btn-sm'>-</button>
                                    <h5>1</h5>
                                    <button className='icon me-1 rounded-5 border-main bg-main fw-bold btn-sm'>+</button>
                                </div>
                                <div className='d-flex align-items-center pt-3'>

                                    <button onClick={() => { this.addtocart(this.state.posts._id) }} className='btn mx-3 my-2  rounded-5 text-white fw-bold primary-bg'>Add To Cart</button>
                                    <button className='btn btn1 rounded-5 fw-bold rating-bg'>Pickup From Store</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <SimilarProducts />


        </>
    }
}
