import { Link } from 'react-router-dom';

const TableItem = ({ name, email, index, deleteContactHandler }) => {
  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="px-6 py-4">{index + 1}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 flex flex-wrap gap-2">
        <Link
          to={name}
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-2 py-1"
        >
          Detail
        </Link>

        <button
          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-1 cursor-pointer"
          onClick={() => deleteContactHandler(name)}
        >
          Delete
        </button>

        <Link
          to={`/edit-contact/${name}`}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-1"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;
