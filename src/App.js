import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Shopping from './Components/Shopping/Shopping'
import axios from 'axios'

export default class App extends Component {

constructor(){
  super()
  // this.state = {posts:[], numOfCartItems: 0 }

}

//  async addtocart(productId) {
//   let x=await axios.post('https://route-ecommerce-app.vercel.app/api/v1/cart', {
//         productId: productId,

//     }, {
//         headers: { token: localStorage.getItem('useToken') }
//     }) 
  //  console.log(data);
  //  this.setState({numOfCartItems:data.numOfCartItems })

// }

//  getdata() {
//   return  axios.get('https://route-ecommerce-app.vercel.app/api/v1/cart', {
//     headers: { token: localStorage.getItem('useToken') }
//   })
//   this.setState({ posts: data.data })
//   this.setState({ numOfCartItems: data.numOfCartItems });

// }

  render() {
  
    let routers = createBrowserRouter([
      {
        path: '', element: <Layout/>, children: [
  
          { index: true, element: < Shopping /> },  
        ]
      }
  
  
    ])
  


    return (
      <RouterProvider router={routers}>
      
      </RouterProvider>
    )
  }
}
