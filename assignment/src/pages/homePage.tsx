import FilmCard from "../components/filmCard"
import { IFilm } from "../models"
import { useLoaderData } from 'react-router-dom'

const HomePage = function () {
    const { films } = useLoaderData() as { films: IFilm[] }

    return <div className="grid grid-cols-3 gap-4">
        {films.map(item => <FilmCard key={item.id} film={item} />)}
    </div>
}

export default HomePage