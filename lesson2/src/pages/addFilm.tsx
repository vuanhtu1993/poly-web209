import { useReducer, useState } from "react"
import { createFilm } from "../api/film"

type State = {
    title: string,
    isValidTitle: boolean,
    extract: string,
    isValidExtract: boolean
}

const initialState = {
    title: "",
    isValidTitle: true,
    extract: "",
    isValidExtract: true
}

const reducer = (state: State, action: { type: string, payload: string }) => {
    let isValid: boolean
    switch (action.type) {
        case "UPDATE_TITLE":
            isValid = action.payload.length > 5
            return { ...state, title: action.payload, isValidTitle: isValid }
        case "VALIDATE_TITLE":
            isValid = action.payload.length > 5
            return { ...state, isValidTitle: isValid }
        case "UPDATE_EXTRACT":
            return state
        default:
            return state
    }
}

const AddFilmPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = async (e: React.FormEvent) => {
        // e.preventDefault()
        // try {
        //     const data = {
        //         title,
        //         extract
        //     }
        //     await createFilm(data)
        //     alert("Thêm mới thành công")
        // } catch (err) {
        //     alert("Có lỗi xảy ra")
        // }
    }

    console.log(state);

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
                        onChange={(e) => dispatch({
                            type: "UPDATE_TITLE",
                            payload: e.target.value
                        })}
                        onBlur={(e) => dispatch({
                            type: "VALIDATE_TITLE",
                            payload: e.target.value
                        })}
                    />
                    <div className="text-red-500">{!state.isValidTitle ? "Trường dữ liệu không hợp lệ" : ""}</div>
                </div>
            </div>

            <div>
                <label className="sr-only">Extract</label>

                <div className="relative">
                    <textarea
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter extract"
                    // onChange={(e) => setExtract(e.target.value)}
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