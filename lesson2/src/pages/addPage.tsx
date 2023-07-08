import { ReactElement, useState } from "react"

const AddFilmPage = function () {
  const [title, setTitle] = useState("")
  const [isValidTitle, setValidTitle] = useState(false)

  const handleTitle = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    validateTitle(value)
    setTitle(value)
  }

  const validateTitle = (title: string) => {
    if (title != "") {
      setValidTitle(true)
    } else {
      setValidTitle(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidTitle) {
      alert("Vui lòng kiểm tra lại!!!")
    }
  }

  return <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
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
            ></textarea>
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
