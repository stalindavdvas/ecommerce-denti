// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://3.93.82.110:5000/productos",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://44.203.138.227:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;