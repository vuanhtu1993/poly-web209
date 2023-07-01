// Object type
type Props = {
    data: {
        title: string,
        thumbnail: string,
        extract: string
    },
    children?: React.ReactNode
}

const FilmCard = function ({ data }: Props) {
    return <article className="group">
        <img
            alt="Lava"
            src={data.thumbnail}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
            <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                    {data.title}
                </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {data.extract}
            </p>
        </div>
    </article>
}

export default FilmCard