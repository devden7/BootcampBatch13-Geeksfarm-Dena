import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactTable from './ContactTable';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [data, setData] = useState([]);
  const getContactData = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3001/contact`,
      });
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  console.log(data);
  return (
    <section className="relative overflow-x-auto ">
      <div className="mb-4">
        <Link
          to="/add-contact"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-3"
        >
          Add Contact
        </Link>
      </div>
      <div>
        {data.length === 0 && (
          <p className="text-center">Contact data is empty</p>
        )}

        {data.length > 0 && <ContactTable data={data} />}
      </div>
    </section>
  );
};

export default ContactPage;
