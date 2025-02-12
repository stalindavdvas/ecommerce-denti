// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://3.91.195.5:5000/productos",
    PRODUCTSID: "http://18.212.253.179:5000/products",
    ADDCART: "http://18.234.46.129:8080/api/addcart",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://18.233.9.156:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;