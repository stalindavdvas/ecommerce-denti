// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://44.205.251.37:5000/productos",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://18.208.138.37:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;