import axios from 'axios';
const BASE_URL="http://localhost:5000/api/articles";
export const getArticles=()=>axios.get(BASE_URL);
export const getArticleById=(id)=>axios.get(`${BASE_URL}/${id}`);
export const createArticle=(data)=>axios.post(BASE_URL,data);
export const updateArticle=(id,data)=>axios.put(`${BASE_URL}/${id}`,data);
export const deleteArticle=(id)=>axios.delete(`${BASE_URL}/${id}`);
