import { useGetTodosQuery } from "../../services/todos.service"

const TodoPage = () => {
  const { data, isLoading } = useGetTodosQuery("")
  return <div className="overflow-x-auto rounded-lg border border-gray-200">
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
            Status
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {data?.map((item, index) => <tr key={item.id}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {index + 1}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.name}</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.isDone}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
}

export default TodoPage
