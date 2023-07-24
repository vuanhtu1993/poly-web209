import { useContext, useReducer, useState } from "react"
import { createFilm } from "../../api/film"
import { MessageContext } from "../../context/message-context"
import { useDispatch } from "react-redux"
import { add as addFilm } from "./film.reducer"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

type FormDataType = {
    title: string,
    extract: string
}

const AddFilmPage = function () {
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>()
    const { setMessage } = useContext(MessageContext)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (data: FormDataType) => {
        try {
            const res = await createFilm(data)
            dispatch(addFilm)
            setMessage({
                type: "success",
                message: "Thêm mới thành công"
            })

        } catch (errors) {
            setMessage({
                type: "error",
                message: "Có lỗi xảy ra"
            })
        }
    }

    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Thêm mới
            </h1>

            <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <div>
                    <label className="sr-only">Title</label>

                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Title"
                            {...register("title", {
                                required: "Trường dữ liệu bắt buộc",
                                minLength: { value: 5, message: "Tối thiểu 5 ký tự" }
                            })}
                        />
                        <div className="text-red-500">{errors.title && errors.title.message}</div>
                    </div>
                </div>

                <div>
                    <label className="sr-only">Extract</label>

                    <div className="relative">
                        <textarea
                            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Extract"
                            {...register("extract", {
                                required: "Trường dữ liệu bắt buộc",
                                minLength: { value: 10, message: "Tối thiểu 10 ký tự" }
                            })}
                        />
                        <div className="text-red-500">{errors.extract && errors.extract.message}</div>
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