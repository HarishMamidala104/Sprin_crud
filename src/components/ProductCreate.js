import React, { useState } from 'react'
import productService from '../Services/productService';

function ProductCreate() {

    const [productId, setproductId] = useState();
    const [productName, setproductName] = useState();
    const [productQty, setproductQty] = useState();
    const [productPrice, setproductPrice] = useState();


    let obj = {
        productId: parseInt(productId),
        productName: productName,
        productQty: productQty,
        productPrice: productPrice

    }
    const product = async () => {
        await productService.create(obj);
        console.log(obj)
        alert("Inserted Successfully")
    }
    return (

        <div>
            <div className='container' >

                <div className='card mt-5'>

                    <div className='title card'>

                        <h1>Create Employee</h1>

                    </div>
                    <div className="mb-3">

                        <label htmlFor="exampleInputEmail1" className="form-label">Product Id</label>

                        <input type="text" className="form-control" id='productId' value={productId} onChange={(e) => {

                            setproductId(e.target.value);

                        }} />

                    </div>
                    <div className="mb-3">

                        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>

                        <input type="text" className="form-control" id='productName' value={productName} onChange={(e) => {
                            setproductName(e.target.value);

                        }} />

                    </div>
                    <div className="mb-3">

                        <label htmlFor="exampleInputEmail1" className="form-label">Product Qty</label>

                        <input type="text" className="form-control" id='productQty' value={productQty} onChange={(e) => {

                            setproductQty(e.target.value);

                        }} />
                    </div>
                    <div className="mb-3">

                        <label htmlFor="exampleInputEmail1" className="form-label">Product Price</label>

                        <input type="text" className="form-control" id='productPrice' value={productPrice} onChange={(e) => {

                            setproductPrice(e.target.value);


                        }} />
                        <button className='btn btn-primary mt-3' onClick={product}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProductCreate
