import { useContext, useEffect } from 'react'
import FilmCard from '../../components/filmCard'
import { IFilm } from '../../models'
import { getAll } from '../../api/film'
import { useDispatch, useSelector } from 'react-redux'
import { endLoading, fetchFilm, startLoading } from '../film/film.reducer'
import { RootState } from '../../store'
import LoadingSkeleton from '../../components/skeleton'
import { MessageContext } from '../../context/message-context'

const HomePage = function () {
    const { films, isLoading } = useSelector((state: RootState) => state.films)
    const dispatch = useDispatch()
    const { setMessage } = useContext(MessageContext)

    const handleFetchFilms = async () => {
        try {
            await dispatch(fetchFilm()).unwrap()
        } catch (err) {
            setMessage({
                type: "error",
                message: err
            })
        }
    }

    useEffect(() => {
        handleFetchFilms()
    }, [])



    return <div>
        <header className="flex">
            <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        </header>
        {isLoading ? <LoadingSkeleton /> : null}
        {/* <LoadingSkeleton /> */}
        <div className="content pt-4 grid grid-cols-3 gap-4">
            {films.map(film => <FilmCard
                key={film.id}
                data={film}
            />)}
        </div>
    </div>
}

export default HomePage
