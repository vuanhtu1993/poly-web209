import FilmCard from "../components/filmCard"

const HomePage = function () {
    return <div className="grid grid-cols-3 gap-4">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
    </div>
}

export default HomePage