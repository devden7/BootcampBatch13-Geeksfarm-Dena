import { useEffect, useState } from 'react';
import ContactTable from './ContactTable';
import { Link } from 'react-router-dom';
import { instanceContact } from '../../lib/axios';
import Loading from '../Loading';
import NotFoundList from '../NotFoundList';

const ContactPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const getContactData = async () => {
    try {
      setIsLoading(true);
      const response = await instanceContact.get('/contacts');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  const deleteContactHandler = async (name) => {
    try {
      await instanceContact.delete(`/delete/${name}`);
      setData((prev) => {
        const newData = prev.filter((item) => item.name !== name);
        return newData;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative overflow-x-auto">
      <div className="my-4">
        <Link
          to="/add-contact"
          className="text-gray-900 bg-white border border-gray-300 duration-300 hover:bg-gray-100 font-medium rounded-lg text-sm p-2"
        >
          Add Contact
        </Link>
      </div>
      <Loading isLoading={isLoading} content="Loading..." />
      <NotFoundList
        data={data}
        isLoading={isLoading}
        content="Contact not found..."
      />
      {data.length > 0 && (
        <div>
          <ContactTable
            data={data}
            deleteContactHandler={deleteContactHandler}
          />
        </div>
      )}
    </section>
  );
};

export default ContactPage;
