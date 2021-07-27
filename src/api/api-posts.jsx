import AxiosConfigs from './api-root'
import Axios from 'axios'

async function put(url, body) {
    try {
     const response = await Axios.put(url, body);
     return response.data;
    } catch (err) {
     throw new Error(err);
    }
   }


async function getPosts() {
    try {
     const response = await AxiosConfigs().get('posts');
     return response.data;
    } catch (err) {
     throw new Error(err);
    }
   }


async function getPost(id) {
    try {
     const response = await AxiosConfigs().get(`posts/${id}`);
     return response.data;
    } catch (err) {
     throw new Error(err);
    }
   }

export {getPosts ,getPost ,put};