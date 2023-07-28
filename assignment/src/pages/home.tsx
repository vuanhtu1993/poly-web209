import { useState, useEffect, useContext } from 'react'
import Film from '../components/film'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from './films/films.slice'
import { AppDispatch, RootState } from '../store'
import LoadingSkeleton from '../components/skeleton'

const HomePage = () => {
    const { films, isLoading } = useSelector((state: RootState) => state.films)
    const dispatch = useDispatch<AppDispatch>()

    const handleFetchFilm = async () => {
        try {
            const data = await dispatch(fetchFilms()).unwrap()
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleFetchFilm()
    }, [])

    return <div className="pt-4 grid grid-cols-3 gap-2">
        {/* Render dynamic - props*/}
        {isLoading && <LoadingSkeleton />}
        {films.map((item) => <Film data={item} key={item.id} />)}
    </div>
}

export default HomePage