import axios from 'axios'

// axios.get("http://localhost:3000/movies")
export const instance = axios.create({
    baseURL: "http://localhost:3000"
})
