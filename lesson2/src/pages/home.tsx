import { useState, useEffect, useContext } from 'react'
import Film from '../components/film'
import { getAll } from '../api/film'
import { FilmContext } from '../store/film-context'
import { IFilm } from '../models'

const HomePage = () => {
    const { films, dispatch } = useContext(FilmContext)

    useEffect(() => {
        const getFilms = async () => {
            const data = await getAll()
            // setFilms(data)
            dispatch({
                type: "FETCH_DATA",
                payload: data
            })
        }
        getFilms()
    }, [])
    console.log(films);

    return <div className="pt-4 grid grid-cols-3 gap-2">
        {/* Render dynamic - props*/}
        {(films as IFilm[]).map((item) => <Film data={item} />)}
    </div>
}

export default HomePage