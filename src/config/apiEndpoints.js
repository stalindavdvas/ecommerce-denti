// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://3.83.124.154:5000/productos",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://18.207.189.100:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;