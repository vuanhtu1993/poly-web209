import { useContext, useReducer, useState } from "react"
import { MessageContext } from "../../App"
import { useForm } from 'react-hook-form'
import { createFilm, fetchFilm } from "./film.reducer"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"

type addFilmForm = {
    title: string,
    extract: string
}

const AddFilmPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<addFilmForm>()
    const { setMessage } = useContext(MessageContext)
    const dispatch = useDispatch<AppDispatch>()

    const onSubmit = async (data: addFilmForm) => {
        try {
            await dispatch(createFilm(data)).unwrap()
            setMessage({
                type: "success",
                message: "Thêm mới thành công"
            })
        } catch (err) {
            setMessage({
                type: "error",
                message: err
            })
        }
    }

    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới Film</h1>
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
                <label className="sr-only">Titles</label>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter title"
                        {...register("title",
                            {
                                required: "Dữ liệu bắt buộc", min: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự"
                                }
                            })
                        }
                    />
                    <div className="text-red-500">{errors.title && errors.title.message}</div>
                </div>
            </div>

            <div>
                <label className="sr-only">Extract</label>

                <div className="relative">
                    <textarea
                        className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter extract"
                        {...register("extract",
                            {
                                required: "Dữ liệu bắt buộc", min: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự"
                                }
                            })
                        }
                    />
                    <div className="text-red-500">{errors.extract && errors.extract.message}</div>
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