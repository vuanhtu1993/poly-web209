import { useContext, useEffect } from 'react'
import FilmCard from '../../components/filmCard'
import LoadingSkeleton from '../../components/skeleton'
import { useFetchFilmQuery } from '../../services/film.service'
import { Link } from 'react-router-dom'

const HomePage = function () {
  const { data, isLoading } = useFetchFilmQuery()

  return <div>
    <h1>Menu</h1>
    <Link to="/film/add">Thêm mới</Link>
    <header className="flex">
      <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    </header>
    {isLoading ? <LoadingSkeleton /> : null}
    {/* <LoadingSkeleton /> */}
    <div className="content pt-4 grid grid-cols-3 gap-4">
      {data?.map(film => <FilmCard
        key={film.id}
        data={film}
      />)}
    </div>
  </div>
}

export default HomePage
