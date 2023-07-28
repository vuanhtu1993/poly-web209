export interface IFilm {
  id: number,
  title: string,
  year: number,
  cast: string[],
  genres: string[],
  href: string,
  extract: string,
  thumbnail: string
}

export interface IUser {
  id?: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string
}
