import axios from 'axios';

const siteUrl = 'https://jsonplaceholder.typicode.com';

const API = {
    getPosts() {
        return axios.get(`${siteUrl}/posts`);
    },
    getPost(id: string | undefined) {
        return axios.get(`${siteUrl}/posts/${id}`);
    },
    getUsers() {
        return axios.get(`${siteUrl}/users`);
    },
    getComments() {
        return axios.get(`${siteUrl}/comments`);
    },
};

export default API;
