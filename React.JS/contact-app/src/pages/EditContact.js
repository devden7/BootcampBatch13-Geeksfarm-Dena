import React from 'react';
import Layout from '../components/layout/Layout';
import EditContactPage from '../components/editContactPage/EditContactPage';

const EditContact = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Edit contact Page</h1>
      <EditContactPage />
    </Layout>
  );
};

export default EditContact;
