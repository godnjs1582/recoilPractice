import axios from "axios";

export const getProductList = () =>{
    return axios.get("https://dummyjson.com/products");
}