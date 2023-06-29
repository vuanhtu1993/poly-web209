import { useEffect, useState } from "react"
import FilmCard from "../components/filmCard"
import { IFilm } from "../models"
import { getAll } from "../api/films"

const HomePage = function () {
    const [films, setFilms] = useState<IFilm[]>([])

    const getFilms = async function () {
        const data = await getAll()
        setFilms(data)
    }

    useEffect(() => {
        getFilms()
    }, [])

    return <div className="grid grid-cols-3 gap-4">
        {films.map(item => <FilmCard key={item.id} film={item} />)}
    </div>
}

export default HomePage