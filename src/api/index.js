import axios from 'axios';

const url = 'https://memorie-backend.herokuapp.com/post';

export const fetchPost = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id,post) => axios.put(`${url}/${id}`,post);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.put(`${url}/${id}/like`);