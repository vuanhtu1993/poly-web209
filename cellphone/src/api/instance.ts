import axios from "axios";

const instance = axios.create({
    baseURL: "https://62de615accdf9f7ec2d66ae3.mockapi.io/api"
})

export default instance;