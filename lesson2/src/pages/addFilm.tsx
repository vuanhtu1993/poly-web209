import { useState } from "react"
import { createFilm } from "../api/film"

const AddFilmPage = () => {
    const [title, setTitle] = useState("")
    const [extract, setExtract] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const data = {
                title,
                extract
            }
            await createFilm(data)
            alert("Thêm mới thành công")
        } catch (err) {
            alert("Có lỗi xảy ra")
        }
    }

    console.log(title, extract);

    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới Film</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
                <label className="sr-only">Titles</label>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label className="sr-only">Extract</label>

                <div className="relative">
                    <textarea
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter extract"
                        onChange={(e) => setExtract(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                    Thêm mới
                </button>
            </div>
        </form>
    </div>
}

export default AddFilmPage