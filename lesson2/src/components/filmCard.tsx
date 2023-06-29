type Props = {
    film: {
        title: string,
        year: number,
        thumbnail: string,
        extract: string,
    },
    children?: React.ReactNode
}

const FilmCard = function ({ film }: Props) {
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="Office"
                src={film.thumbnail}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time className="block text-xs text-gray-500">
                    {film.year}
                </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        {film.title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {film.extract}
                </p>
            </div>
        </article>
    )
}

export default FilmCard