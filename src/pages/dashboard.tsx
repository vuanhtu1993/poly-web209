import { useGetProductQuery, useRemoveProductMutation } from "../services/product.service"

const Dashboard = () => {
  const { data, isLoading } = useGetProductQuery()
  const [removeProduct] = useRemoveProductMutation()

  const handleDeleteProduct = (id?: number) => {
    console.log(id);

    if (id) {
      removeProduct(id)
    }
  }

  return <div className="overflow-x-auto rounded-lg border border-gray-200 container mx-auto">
    <h1 className="text-2xl">Dashboard</h1>
    {isLoading && <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>}
    {/* Table */}
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            STT
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Price
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Description
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {data?.map((item, index) => <tr key={item.id}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {index + 1}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {item.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {item.price}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {item.description}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            <button className="bg-yellow-500 p-2">
              Update
            </button>
            <button onClick={() => handleDeleteProduct(item.id)} className="bg-rose-500 p-2">
              Delete
            </button>
          </td>
        </tr>)}

      </tbody>
    </table>
  </div>
}

export default Dashboard
