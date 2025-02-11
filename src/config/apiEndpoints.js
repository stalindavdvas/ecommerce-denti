// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://52.70.251.25:5000/productos",
    PRODUCTSID: "http://54.234.33.30:5000/products",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://44.202.134.28:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;