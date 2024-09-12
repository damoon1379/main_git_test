import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home'

import ShopingCart from './ShopingCart'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
    {
      path:'ShopingCart/:sh',
      element:<ShopingCart/>
    },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
