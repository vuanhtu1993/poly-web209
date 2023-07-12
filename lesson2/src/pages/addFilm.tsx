import { useReducer, useState } from "react"
import { createFilm } from "../api/film"

type FormDataType = {
    title: string,
    extract: string
}

const intialFormData = {
    title: "",
    extract: ""
}

const reducerFormData = (state: FormDataType, action: { type: string, payload: string }) => {
    // complex logic
    switch (action.type) {
        case "UPDATE_TITLE":
            return { ...state, title: action.payload }
        case "UPDATE_EXTRACT":
            return { ...state, extract: action.payload }
        default:
            return state
    }
}

const AddFilmPage = () => {
    const [extract, setExtract] = useState("")
    const [isValidExtract, setValidExtract] = useState(true)
    const [formData, dispatchFormData] = useReducer(reducerFormData, intialFormData)

    const handleExtract = (e: React.FormEvent) => {
        const value = (e.target as HTMLInputElement).value
        // Async
        setExtract(value)
        validateExtract(value)
    }

    const validateExtract = (str: string) => {
        if (str.length > 10) {
            setValidExtract(true)
        } else {
            setValidExtract(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // if (isValidTitle && isValidExtract) {
        //     const data = {
        //         title,
        //         extract
        //     }
        //     try {
        //         await createFilm(data)
        //         alert("Thêm mới thành công")
        //     } catch (err) {
        //         alert(err)
        //     }
        // }
    }

    console.log(formData);



    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
                <label className="sr-only">Title</label>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Title"
                        onChange={(e) => dispatchFormData({
                            type: "UPDATE_TITLE",
                            payload: e.target.value
                        })}
                    />
                    {/* <div className="text-red-500">{!isValidTitle ? "Trường dữ liệu không hợp lệ" : ""}</div> */}
                </div>
            </div>

            <div>
                <label className="sr-only">Extract</label>

                <div className="relative">
                    <textarea
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Extract"
                        cols={5}
                        onChange={(e) => dispatchFormData({
                            type: "UPDATE_EXTRACT",
                            payload: e.target.value
                        })}
                    />
                    <div className="text-red-500">{!isValidExtract ? "Trường dữ liệu không hợp lệ" : ""}</div>
                </div>
            </div>

            <div className="flex items-center justify-end">
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