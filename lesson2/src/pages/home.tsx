import { useContext, useEffect } from 'react'
import FilmCard from '../components/filmCard'
import { IFilm } from '../models'
import { FilmContext } from '../store/film-context'
import { getAll } from '../api/film'

const HomePage = function () {
    // const { films } = useLoaderData() as { films: IFilm[] }
    const { state, dispatch } = useContext(FilmContext)

    useEffect(() => {
        const getData = async function () {
            const data = await getAll()
            dispatch({
                type: "FETCH_DATA",
                payload: data
            })
        }
        getData()
    }, [])

    console.log(state);

    return <div>
        <header className="flex">
            <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        </header>
        <div className="content pt-4 grid grid-cols-3 gap-4">
            {(state.films as IFilm[]).map(film => <FilmCard
                key={film.id}
                data={film}
            />)}
        </div>
    </div>
}

export default HomePage