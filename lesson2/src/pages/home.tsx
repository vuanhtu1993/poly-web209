import FilmCard from '../components/filmCard'
import { IFilm } from '../models'
import { useLoaderData } from 'react-router-dom'

const HomePage = function () {
    const { films } = useLoaderData() as { films: IFilm[] }
    return <div>
        <header className="flex">
            <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        </header>
        <div className="content pt-4 grid grid-cols-3 gap-4">
            {films.map(film => <FilmCard
                key={film.id}
                data={film}
            />)}
        </div>
    </div>
}

export default HomePage