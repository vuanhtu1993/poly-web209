import { ReactElement, useReducer, useState } from "react"
import { createMovie } from "../api/films"
import Message from "../components/message"

type AddForm = {
  title: string,
  extract: string
}

const initialForm: AddForm = {
  title: "",
  extract: ""
}

const formReducer = (state: AddForm, action: { type: string, payload: string }) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.payload }
    case "UPDATE_EXTRACT":
      return { ...state, extract: action.payload }
    default:
      return state
  }
}

type ValidateAddForm = {
  isValidTitle: boolean,
  isValidExtract: boolean,
}

const intialValidateForm = {
  isValidTitle: true,
  isValidExtract: true,
}

const validateReducer = (state: ValidateAddForm, action: { type: string, payload: AddForm }) => {
  let isValid: boolean
  switch (action.type) {
    case "VAlIDATE_TITLE":
      isValid = action.payload.title.length > 0
      return { ...state, isValidTitle: isValid }
    case "VAlIDATE_EXTRACT":
      isValid = action.payload.extract.length > 10
      return { ...state, isValidExtract: isValid }
    default:
      return state
  }
}

const AddFilmPage = function () {
  const [contentMessage, setContentMessage] = useState<{ message: string, type: string } | null>(null)
  const [formData, setFormData] = useReducer(formReducer, initialForm)
  const [formValidate, setFormValidate] = useReducer(validateReducer, intialValidateForm)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formValidate.isValidExtract || !formValidate.isValidTitle) {
      alert("Vui lòng kiểm tra lại!!!")
    } else {
      try {
        await createMovie(formData);
        setContentMessage({
          message: "Thêm mới thành công 🤟",
          type: "success"
        })
      } catch (err) {
        alert("Có lỗi xảy ra!!!")
      }
    }
  }

  return <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      {contentMessage && <Message content={contentMessage} />}
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới</h1>
      </div>

      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="sr-only">Title</label>

          <div className="relative">
            <input
              type="text"
              className="w-full border rounded-lg border-black p-4 pe-12 text-sm shadow-sm"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({
                type: "UPDATE_TITLE",
                payload: e.target.value
              })}
              onBlur={() => setFormValidate({
                type: "VAlIDATE_TITLE",
                payload: formData
              })}
              name="title"
            />
          </div>
          <div className="text-red-400">{!formValidate.isValidTitle && "Trường dữ liệu không hợp lệ"}</div>
        </div>

        <div>
          <label className="sr-only">Extract</label>

          <div className="relative">
            <textarea
              className="w-full border rounded-lg border-black p-4 pe-12 text-sm shadow-sm"
              placeholder="Extract"
              cols={6}
              name="extract"
              value={formData.extract}
              onChange={(e) => setFormData({
                type: "UPDATE_EXTRACT",
                payload: e.target.value
              })}
              onBlur={() => setFormValidate({
                type: "VAlIDATE_EXTRACT",
                payload: formData
              })}
            />
            <div className="text-red-400">{!formValidate.isValidExtract && "Trường dữ liệu không hợp lệ"}</div>
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

    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://images.thedirect.com/media/article_full/mcu-watch-order-marvel-studios-first-time_pR7gM4t.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
}

export default AddFilmPage
