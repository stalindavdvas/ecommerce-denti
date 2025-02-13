// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://35.175.137.190:5000/productos",
    PRODUCTSID: "http://34.235.89.199:5000/products",
    ADDCART: "http://3.80.216.223:8080/api/addcart",
    GETCART: "http://18.205.240.21:8080/api/cart",
    GETCOUNTCART: "http://98.84.101.7:8080/api/cart/count",
    GETCARTPRODUCTS: "http://3.80.216.223:8080/api/addcart",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://44.210.146.112:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;