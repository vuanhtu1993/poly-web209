import { useState, useEffect, useContext } from 'react'
import Film from '../components/film'
import { getAll } from '../api/film'
import { IFilm } from '../models'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from './films/films.reducer'
import { RootState } from '../store'

const HomePage = () => {
    const { films, isLoading } = useSelector((state: RootState) => state.films)
    const dispatch = useDispatch()
    useEffect(() => {
        const getFilms = async () => {
            const data = await getAll()
            // setFilms(data)
            dispatch(fetchFilms(data))
        }
        getFilms()
    }, [])

    return <div className="pt-4 grid grid-cols-3 gap-2">
        {/* Render dynamic - props*/}
        {films.map((item) => <Film data={item} />)}
    </div>
}

export default HomePage