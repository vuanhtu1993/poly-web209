import { ReactElement, useState } from "react"
import { createMovie } from "../api/films"
import Message from "../components/message"


const AddFilmPage = function () {
  const [title, setTitle] = useState("")
  const [isValidTitle, setValidTitle] = useState(true)
  const [extract, setExtract] = useState("")
  const [isValidExtract, setValidExtract] = useState(true)
  const [contentMessage, setContentMessage] = useState<{ message: string, type: string } | null>(null)

  const handleTitle = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    validateTitle()
    setTitle(value)
  }

  const handleExtract = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    validateExtract()
    setExtract(value)
  }

  const validateTitle = () => {
    if (title != "") {
      setValidTitle(true)
    } else {
      setValidTitle(false)
    }
  }

  const validateExtract = () => {
    if (extract != "" && extract.length > 10) {
      setValidExtract(true)
    } else {
      setValidExtract(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidTitle || !isValidExtract) {
      alert("Vui lòng kiểm tra lại!!!")
    } else {
      try {
        const data = {
          title,
          extract
        }
        await createMovie(data);
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
              onChange={handleTitle}
              onBlur={validateTitle}
              name="title"
            />
          </div>
          <div className="text-red-400">{!isValidTitle && "Trường dữ liệu không hợp lệ"}</div>
        </div>

        <div>
          <label className="sr-only">Extract</label>

          <div className="relative">
            <textarea
              className="w-full border rounded-lg border-black p-4 pe-12 text-sm shadow-sm"
              placeholder="Extract"
              cols={6}
              name="extract"
              onChange={handleExtract}
              onBlur={validateExtract}
            />
            <div className="text-red-400">{!isValidExtract && "Trường dữ liệu không hợp lệ"}</div>
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
