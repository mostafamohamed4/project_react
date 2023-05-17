import axios from 'axios';
import React, { Component } from 'react'
import  './SimilarProducts.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimilarProducts extends Component {
    constructor() {
        super()
        this.state = { posts: [] }
    }

    async componentDidMount() {
        let { data } = await axios.get(`https://route-ecommerce-app.vercel.app/api/v1/products`)
        this.setState({ posts: data.data })
        console.log(data.data);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1183.3,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 978.4,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (


            <section className='SimilarProducts'>
                <div className='container'>
                    <div className='Header'>
                        <h2 className='primary-color'>Similar Products</h2>
                        <p className='text-color'>You may like these products also</p>
                    </div>


                    <div className='row g-3'     >
                        <Slider {...settings}>
                            {this.state.posts.slice(26, 32).map((items) => {
                                return <div key={items._id} className='col-lg-3 px-2 col-md-12'>
                                    <div className="card">
                                        <img src={items.imageCover} height={320} className="w-100 p-2  rounded-4" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{items.title.split(' ').slice(3, 5).join(' ')}</h5>
                                            <h5 className='primary-color fw-bolder'>{items.price} LE</h5>
                                            <div className='d-flex'>
                                                <span className='main text-decoration-line-through px-4 fw-bold'>{items?.price} LE</span>
                                                <div className=' rating-bg px-2 fw-bold'><span>50%off</span></div>
                                            </div>
                                            <div className='icon'>
                                                <i className="fa-solid fa-star rating-color"></i>
                                                <i className="fa-solid fa-star rating-color"></i>
                                                <i className="fa-solid fa-star rating-color"></i>
                                                <i className="fa-regular fa-star-half-stroke rating-color"></i>
                                                <i className="fa-regular fa-star rating-color"></i>
                                                <span className='text-black fw-bolder px-2 font-l'>3.8 of 5</span>  </div>
                                        </div>
                                    </div>

                                </div>
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}
