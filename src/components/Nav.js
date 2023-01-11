import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import GetAllProducts from './GetAllProducts'
import ProductCreate from './ProductCreate'
import UpdateProduct from './UpdateProduct'
import GetProductById from './GetProductById'


function Nav() {
    return (
        <div>
       
                <BrowserRouter>
                    <ul>
                        <li><Link to="/create">create Product</Link></li>
                        <li><Link to="/view">view List</Link></li>
                        <li><Link to="/update">Update</Link></li>
                        
                        {/* <li><Link to='/home'>Home</Link></li> */}
                    </ul>
                    <Routes>
                        <Route path='/create' element={<ProductCreate />} />
                        <Route path='/viewById/:productId' element={<GetProductById/>}/>
                        <Route path='/update/:productId' element={<UpdateProduct />} />
                        <Route path='/view' element={<GetAllProducts/>}/>
                    
                        {/* <Route path='/home' element={<Home />} /> */}
                    </Routes>
                </BrowserRouter>
            </div>
       


    )

}

export default Nav
