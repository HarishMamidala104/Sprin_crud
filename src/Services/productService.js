import axios from 'axios'
import React, { Component } from 'react'

const baseUrl="http://localhost:3232/db"
export class productService {
    create(product) {
        return axios.post("http://localhost:3232/db/create", product)
    }
    getAllProducts(){
        return axios.get("http://localhost:3232/db/all");
     }

     updateProduct(prod){
        return axios.put("http://localhost:3232/db/update",prod);
     }
     deleteProduct(productId){
        return axios.delete(`${baseUrl}/delete/${productId}`);
     }
     getProduct(productId){
        console.log(productId);
        return axios.get(`${baseUrl}/get/${productId}`);
     }

}

export default new productService();
