import { useContext, useReducer, useState } from "react"
import { createFilm } from "../../api/film"
import { MessageContext } from "../../context/message-context"

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

type FormValidType = {
    isValidTitle: boolean,
    isValidExtract: boolean
}

const intialFormValid = {
    isValidTitle: true,
    isValidExtract: true
}

const reducerFormValid = (state: FormValidType, action: { type: string, payload: FormDataType }) => {
    let isValid: boolean
    switch (action.type) {
        case "VALIDATE_TITLE":
            isValid = action.payload.title.length > 0
            return { ...state, isValidTitle: isValid }
        case "VALIDATE_EXTRACT":
            isValid = action.payload.extract.length > 10
            return { ...state, isValidExtract: isValid }
        default:
            return state
    }
}

const AddFilmPage = () => {
    const [formData, dispatchFormData] = useReducer(reducerFormData, intialFormData)
    const [formValid, dispatchFormValid] = useReducer(reducerFormValid, intialFormValid)
    const { message, setMessage } = useContext(MessageContext)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formValid.isValidExtract && formValid.isValidTitle) {
            try {
                await createFilm(formData)
                // setMessageContent({
                //     message: "Thêm mới thành công",
                //     type: "success"
                // })
                setMessage({
                    type: "success",
                    message: "Thêm mới thành công"
                })
            } catch (err: any) {
                // setMessageContent({
                //     message: err.message,
                //     type: "error"
                // })
            }
        }
    }

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
                        onChange={(e) => {
                            dispatchFormData({
                                type: "UPDATE_TITLE",
                                payload: e.target.value
                            })
                            dispatchFormValid({
                                type: "VALIDATE_TITLE",
                                payload: formData
                            })
                        }}
                        onBlur={() => dispatchFormValid({
                            type: "VALIDATE_TITLE",
                            payload: formData
                        })}
                    />
                    <div className="text-red-500">{!formValid.isValidTitle ? "Trường dữ liệu không hợp lệ" : ""}</div>
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
                        onBlur={() => dispatchFormValid({
                            type: "VALIDATE_EXTRACT",
                            payload: formData
                        })}
                    />
                    <div className="text-red-500">{!formValid.isValidExtract ? "Trường dữ liệu không hợp lệ" : ""}</div>
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