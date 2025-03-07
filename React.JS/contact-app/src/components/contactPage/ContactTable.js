import TableItem from './TableItem';

const ContactTable = ({ data }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 h-screen">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            Nama
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            action
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <TableItem
            name={item.name}
            email={item.email}
            index={i}
            key={item.name}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
