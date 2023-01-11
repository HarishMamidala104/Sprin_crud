import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../Services/productService";

function UpdateProduct() {
  const params = useParams();
  const navigate=useNavigate();

  const [productId, setproductId] = useState();
  const [productName, setproductName] = useState();
  const [productQty, setproductQty] = useState();
  const [productPrice, setproductPrice] = useState();
  
  useEffect(() => {
    productService.getProduct(params.productId).then((res) => {
      console.log("hi");
      console.log(res.data.productId);
      setproductId(res.data.productId);
      setproductName(res.data.productName);
      setproductPrice(res.data.productQty);
      setproductQty(res.data.productPrice);
    });
  }, []);
  const productupdate = () => {
    let pro = {
      productId:productId,
      productName: productName,
      productQty: productQty,
      productPrice: productPrice,
    };
    productService.updateProduct(pro).then((res) => {
      console.log(res.date);
      navigate("/view")
    });
  };
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="title card">
          <h1>UpdateProduct Details</h1>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Id
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={productId}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Name
          </label>

          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
        </div>

        <div classsName="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Product Quantity
          </label>

          <input
            type="email"
            className="form-control "
            aria-describedby="emailHelp"
            value={productQty}
            onChange={(e) => setproductQty(e.target.value)}
          />
        </div>

        <div classsName="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Product Price
          </label>

          <input
            type="email"
            className="form-control "
            aria-describedby="emailHelp"
            value={productPrice}
            onChange={(e) => setproductPrice(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-3" onClick={productupdate}>
          update
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
