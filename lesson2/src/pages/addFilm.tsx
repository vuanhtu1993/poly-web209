import { useContext, useReducer, useState } from "react"
import { createFilm } from "../api/film"
import { MessageContext } from "../store/message-context"
import { produce } from 'immer'

type FormDataType = {
    title: string,
    extract: string
}

const intialFormData = {
    title: "",
    extract: ""
}

const formDataReducer = function (draft: FormDataType, action: { type: string, payload: string }) {
    switch (action.type) {
        case "UPDATE_TITLE":
            // return { ...state, title: action.payload }
            draft.title = action.payload
            break
        case "UPDATE_EXTRACT":
            draft.extract = action.payload
            break
        default:
            return draft
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

const formValidReducer = function (draft: FormValidType, action: { type: string, payload: FormDataType }) {
    let isValid: boolean
    switch (action.type) {
        case "VALIDATE_TITLE":
            isValid = action.payload.title.length > 0
            // return { ...state, isValidTitle: isValid }
            draft.isValidTitle = isValid
            break
        case "VALIDATE_EXTRACT":
            isValid = action.payload.extract.length > 10
            // return { ...state, isValidExtract: isValid }
            draft.isValidExtract = isValid
            break
        default:
            return draft
    }
}

const AddFilmPage = function () {
    const [formData, dispatchFormData] = useReducer(produce(formDataReducer), intialFormData)
    const [formValid, dispatchFormValid] = useReducer(produce(formValidReducer), intialFormValid)
    const { setMessage } = useContext(MessageContext)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formValid.isValidExtract && formValid.isValidTitle) {
            try {
                await createFilm(formData)
                setMessage({
                    type: "success",
                    message: "Thêm mới thành công"
                })
            } catch (err) {
                let errorMessage = ""
                if (typeof err === "string") {
                    errorMessage = err
                } else if (err instanceof Error) {
                    errorMessage = err.message
                }
                setMessage({
                    type: "error",
                    message: "Có lỗi xảy ra"
                })
            }

        } else {
            alert("Yêu cầu kiểm tra lại")
        }
    }

    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Thêm mới
            </h1>

            <form
                action=""
                onSubmit={handleSubmit}
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
                            placeholder="Enter Extract"
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