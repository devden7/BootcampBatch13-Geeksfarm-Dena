import React from 'react';
import Layout from '../components/layout/Layout';
import ContactDetailPage from '../components/contactDetailPage/ContactDetailPage';

const ContactDetail = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Contact Detail</h1>
      <ContactDetailPage />
    </Layout>
  );
};

export default ContactDetail;
