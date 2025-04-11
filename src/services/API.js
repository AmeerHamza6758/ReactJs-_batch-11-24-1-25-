import axios from "axios";

const Api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default Api;