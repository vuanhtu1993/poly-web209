import { useLoaderData, Link } from 'react-router-dom'
import { IFilm } from '../models'

const AdminPage = function () {
  const { films } = useLoaderData() as { films: IFilm[] }

  return <div className="container mx-auto">
    <div className='flex justify-between'>
      <h2 className='text-2xl'>Dashboard</h2>
      <Link to="/admin/add" className='bg-green-600 p-2 text-white'>Thêm mới</Link>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Year
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Thumbnail
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {films.map(item => <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {item.title}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.year}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <img src={item.thumbnail} alt="" />
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                View
              </a>
            </td>
          </tr>)}

        </tbody>
      </table>
    </div>
  </div>
}

export default AdminPage
