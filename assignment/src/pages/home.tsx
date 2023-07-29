import { useEffect, useState } from 'react'
import { IFilm } from '../models'
import { getAll } from '../api/film'
import FilmCard from '../components/filmCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilm } from './film/film.reducer'
import { RootState } from '../store'

const HomePage = () => {
    const dispatch = useDispatch()
    const { films } = useSelector((state: RootState) => state.films)

    useEffect(() => {
        const getFilms = async () => {
            const data = await getAll()
            // setFilms(data)
            dispatch(fetchFilm(data))
        }
        getFilms()

    }, [])

    return <div className="container mx-auto">
        <header className="flex">
            <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        </header>
        <div className="content pt-4 grid grid-cols-3 gap-4">
            {films.map(item => <FilmCard data={item} key={item.id} />)}
        </div>
    </div>
}

export default HomePage