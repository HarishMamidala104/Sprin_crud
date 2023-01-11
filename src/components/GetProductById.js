import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import productService from '../Services/productService';

function GetProductById() {
    const [productId, setproductId] = useState();
    const [productName, setproductName] = useState();
    const [productQty, setproductQty] = useState();
    const [productPrice, setproductPrice] = useState()
    const params = useParams()

    useEffect(() => {
        productService.getProduct(params.productId).then(res => {
            setproductId(res.data.productId);
            setproductName(res.data.productName);
            setproductQty(res.data.productQty);
            setproductPrice(res.data.productPrice);
        })
    }, []);

    return (
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>view product</h3>
                <div className='card-body'>
                    <center>
                        <table className='table-style'>
                            <tr>
                                <th><label>productId:</label></th>
                                <td><div>{productId}</div></td>
                            </tr>
                            <tr>
                                <th><label>productName:</label></th>
                                <td><div>{productName}</div></td>
                            </tr>
                            <tr>
                                <th><label>productPrice:</label></th>
                                <td><div>{productQty}</div></td>
                            </tr>
                            <tr>
                                <th><label>productPrice:</label></th>
                                <td><div>{productPrice}</div></td>
                            </tr>
                        </table>
                    </center>
                </div>


            </div>

        </div>
    )
}

export default GetProductById
