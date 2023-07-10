import { useState, useEffect } from 'react'
import Film from '../components/film'
import { getAll } from '../api/film'

const HomePage = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const data = await getAll()
            setFilms(data)
        }
        getFilms()
    }, [])
    return <div className="pt-4 grid grid-cols-3 gap-2">
        {/* Render dynamic - props*/}
        {films.map((item) => <Film data={item} />)}
    </div>
}

export default HomePage