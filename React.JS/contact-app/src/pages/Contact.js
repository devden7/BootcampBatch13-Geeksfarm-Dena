import React from 'react';
import Layout from '../components/layout/Layout';
import ContactPage from '../components/contactPage/ContactPage';

const Contact = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <ContactPage />
    </Layout>
  );
};

export default Contact;
