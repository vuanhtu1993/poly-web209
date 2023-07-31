import { useState, useEffect, useContext } from 'react'
import Film from '../components/film'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from './films/films.slice'
import { AppDispatch, RootState } from '../store'
import LoadingSkeleton from '../components/skeleton'
import { Link } from 'react-router-dom'

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

  return <div>
    <h2>Menu</h2>
    <ul className="space-y-1">
      <li>
        <Link
          to="/todos"
          className="group flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
        >
          <span className="text-sm font-medium"> Todo page </span>
        </Link>
      </li>
    </ul>
    <div className="pt-4 grid grid-cols-3 gap-2">

      {/* Render dynamic - props*/}
      {isLoading && <LoadingSkeleton />}
      {films.map((item) => <Film data={item} key={item.id} />)}
    </div>
  </div>
}

export default HomePage
