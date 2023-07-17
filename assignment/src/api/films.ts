import axios from 'axios'
import { IFilm } from '../models'

const instance = axios.create({
  baseURL: "http://localhost:3000"
})

export const getAll = async function () {
  const res = await instance.get("/movies")
  return res.data
}

export const createMovie = async (data: IFilm) => {
  const res = await instance.post("/movies", data)
  return res
}
