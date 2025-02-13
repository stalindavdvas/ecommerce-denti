// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://3.83.184.13:5000/productos",
    PRODUCTSID: "http://54.163.59.78:5000/products",
    ADDCART: "http://52.23.205.199:8080/api/addcart",
    GETCART: "http://3.87.215.1:4567/api/getcart",
    GETCOUNTCART: "http://54.88.249.69:8080/api/cart/count",
    EDITCART: "http://3.84.40.86:4567/api/cart",
    DELETECART: "http://3.84.40.86:4567/api/cart",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://54.164.68.236:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;