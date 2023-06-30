
type Props = {
    data: { title: string, year: number, thumbnail: string }
    children?: React.ReactNode
}

const FilmCard = function ({ data }: Props) {
    return <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
            alt="Office"
            src={data.thumbnail}
            className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
            <time className="block text-xs text-gray-500">
                {data.year}
            </time>

            <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">
                    {data.title}
                </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?
            </p>
        </div>
    </article>
}

export default FilmCard