// src/config/apiEndpoints.js

const API_ENDPOINTS = {
    PRODUCTS: "http://3.89.195.254:5000/productos",
    PRODUCTSID: "http://54.90.201.218:5000/products",
    ADDCART: "http://54.147.172.4:8080/api/addcart",
    GETCART: "http://174.129.74.211:4567/api/getcart",
    GETCOUNTCART: "http://54.88.186.40:8080/api/cart/count",
    CATEGORIES: process.env.NEXT_PUBLIC_CATEGORIES_API,
    AUTH: "http://54.224.180.150:5000",
    ORDERS: process.env.NEXT_PUBLIC_ORDERS_API,
  };
  
  export default API_ENDPOINTS;