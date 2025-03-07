import React, { useEffect, useState } from 'react';
import { instanceContact } from '../../lib/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const ContactDetailPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const getContactDetail = async () => {
    try {
      setIsLoading(true);
      const response = await instanceContact.get(location.pathname);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
      if (error.response.data.message === 'Contact not found')
        return navigate('/contact');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getContactDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="px-5 my-5">
      <div className="flex flex-col items-center">
        <Loading isLoading={isLoading} content="Loading..." />
        {isLoading === false && (
          <div className="w-full flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <p className="border-b-2 border-gray-200 py-2 text-gray-500">
              Name :{' '}
              <span className="font-medium text-gray-900"> {data.name}</span>
            </p>
            <p className="border-b-2 border-gray-200 py-2 text-gray-500">
              phone :{' '}
              <span className="font-medium text-gray-900">{data.mobile}</span>
            </p>
            <p className="border-b-2 border-gray-200 py-2 text-gray-500">
              Email :{' '}
              <span className="font-medium text-gray-900">{data.email}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactDetailPage;
