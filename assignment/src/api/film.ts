import instance from "./instance"

export const getAll = async function () {
  const res = await instance.get('/movies')
  return res.data
}

export const createFilm = async function (data: { title: string, extract: string }) {
  const res = await instance.post('/movies', data)
  return res.data
}
