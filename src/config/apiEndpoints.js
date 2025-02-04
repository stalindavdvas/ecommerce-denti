// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://54.172.7.9:5000/productos",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://54.197.16.41:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;