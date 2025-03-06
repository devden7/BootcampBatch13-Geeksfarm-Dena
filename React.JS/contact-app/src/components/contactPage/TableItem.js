const TableItem = ({ name, email, index }) => {
  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="px-6 py-4">{index + 1}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 flex flex-wrap gap-2">
        <a
          href="contactDetail/<%= value.name %>"
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-2 py-1"
        >
          Detail
        </a>

        <form action="/delete" method="post">
          <input type="hidden" name="name" value="<%= value.name %>" />
          <button
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-1 cursor-pointer"
            type="submit"
          >
            Delete
          </button>
        </form>
        <a
          href="/edit-contact/<%= value.name %>"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-1"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableItem;
