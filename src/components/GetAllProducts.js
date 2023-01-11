import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import productService from '../Services/productService';

function GetAllProducts() {
    const navigate = useNavigate();
    const [product, setproduct] = useState([]);
    useEffect (() => {
        getAll()
    }, [])
    const getAll = async () => {
        await productService.getAllProducts().then((res) => {
            setproduct(res.data);
            console.log(res.data);
        });
    };
    const deleteProduct =  (id) => {
        productService.deleteProduct(id);
        getAll();
    };

    const getProduct = (productId) => {
        navigate(`/viewById/${productId}`);
        alert("productId is:" + productId);
    };
    const updateProduct = (productId) => {
        navigate(`/update/${productId}`)

    };


    return (
        <div>
            <div className='container'>
                <h1>Product List</h1>
                <hr />
                <table className='table '>
                    <thead>
                        <tr>
                            <th scope='col'>ProductId</th>
                            <th scope='col'>ProductName</th>
                            <th scope='col'>ProductPrice</th>
                            <th scope='col'>ProductQty</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((pro) => {
                            return (
                                <tr key={pro.productId}>
                                    <td>{pro.productId}</td>
                                    <td>{pro.productName}</td>
                                    <td>{pro.productPrice}</td>
                                    <td>{pro.productQty}</td>

                                    <td>
                                        <a className='btn btn-primary' style={{ margin: "10px" }} onClick={() => getProduct(pro.productId)}>view</a>
                                        <a className='btn btn-primary' style={{ margin: "10px" }} onClick={() => updateProduct(pro.productId)}>update</a>
                                        <a className='btn btn-primary' style={{ margin: "10px" }} onClick={() => deleteProduct(pro.productId)}>delete</a>
                                    </td>
                                </tr>
                            )
                        }
                        )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GetAllProducts
