import axios from 'axios';



const API = axios.create({ baseURL: 'https://memorie-backend.herokuapp.com' });

API.interceptors.request.use((req)=>{
  if (localStorage.getItem('profile')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchPost = (id) => API.get(`/post/${id}`);

export const fetchPosts = (page) => API.get(`/post?page=${page}`);

export const fetchPostBySearchQuery = (searchQuery) => API.get(`/post/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const createPost = (newPost) => API.post(`/post`, newPost);

export const updatePost = (id, post) => API.put(`/post/${id}`, post);

export const deletePost = (id) => API.delete(`/post/${id}`);

export const likePost = (id) => API.put(`/post/${id}/like`);

export const signIn = (formData) => API.post(`/user/signin`, formData);

export const signUp = (formData) => API.post(`/user/signup`, formData);