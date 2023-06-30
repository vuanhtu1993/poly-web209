import axios from 'axios'

// axios.get("http://localhost:3000/movies")
const instance = axios.create({
    baseURL: "http://localhost:3000"
})

export const getAll = async function () {
    const res = await instance.get("/movies")
    return res.data
}