import { useForm } from 'react-hook-form'
import { IProduct } from '../models';
import { useAddProductMutation } from '../services/product.service';
import { useNavigate } from 'react-router';

type AddForm = {
  name: string,
  price: number,
  description: string
}

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<AddForm>()
  const [addProduct] = useAddProductMutation()
  const navigate = useNavigate()

  const onSubmit = (data: IProduct) => {
    addProduct(data)
    navigate('/')
  }


  return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới sản phẩm</h1>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label className="sr-only">Name</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
            placeholder="Tên"
            {...register("name")}
          />
        </div>
      </div>

      <div>
        <label className="sr-only">Giá</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
            placeholder="Giá"
            {...register("price")}
          />
        </div>
      </div>
      <div>
        <label className="sr-only">Mô tả</label>

        <div className="relative">
          <textarea
            className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
            placeholder="Mô tả"
            {...register("description")}
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
}

export default AddProduct
