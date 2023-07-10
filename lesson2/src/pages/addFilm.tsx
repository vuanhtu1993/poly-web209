import { useReducer, useState } from "react"

type FormDataType = {
    title: string,
    extract: string
}

const intialFormData = {
    title: "",
    extract: ""
}

const formDataReducer = function (state: FormDataType, action: { type: string, payload: string }) {
    switch (action.type) {
        case "UPDATE_TITLE":
            return { ...state, title: action.payload }
        case "UPDATE_EXTRACT":
            return { ...state, extract: action.payload }
        default:
            return state
    }
}

const AddFilmPage = function () {
    const [formData, dispatchFormData] = useReducer(formDataReducer, intialFormData)
    const [isValidTitle, setValidTitle] = useState(true)

    const [isValidExtract, setValidExtract] = useState(true)


    const validateTitle = (str: string) => {
        if (str.length > 3) {
            setValidTitle(true)
        } else {
            setValidTitle(false)
        }
    }


    const validateExtract = (str: string) => {
        if (str.length > 10) {
            setValidExtract(true)
        } else {
            setValidExtract(false)
        }
    }

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     if (isValidExtract && isValidTitle) {
    //         const data = {
    //             title,
    //             extract
    //         }
    //         console.log(data);
    //         alert("Thêm mới thành công!");

    //     } else {
    //         alert("Yêu cầu kiểm tra lại")
    //     }
    // }


    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Thêm mới
            </h1>

            <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >

                <div>
                    <label className="sr-only">Title</label>

                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Title"
                            onChange={(e) => dispatchFormData({
                                type: "UPDATE_TITLE",
                                payload: e.target.value
                            })}
                        // onBlur={() => validateTitle(title)}
                        />
                        <div className="text-red-500">{!isValidTitle ? "Trường dữ liệu không hợp lệ" : ""}</div>
                    </div>
                </div>

                <div>
                    <label className="sr-only">Extract</label>

                    <div className="relative">
                        <textarea
                            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Extract"
                            onChange={(e) => dispatchFormData({
                                type: "UPDATE_EXTRACT",
                                payload: e.target.value
                            })}
                        />
                        <div className="text-red-500">{!isValidExtract ? "Trường dữ liệu không hợp lệ" : ""}</div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                    Thêm mới
                </button>
            </form>
        </div>
    </div>
}

export default AddFilmPage