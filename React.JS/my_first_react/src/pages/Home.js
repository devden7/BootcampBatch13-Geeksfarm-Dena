import React from 'react';
import Layout from '../components/layout/Layout';
import Started from '../components/startedSection/Started';
import Comment from '../components/commentSection/Comment';
import Hooks from '../components/hookSection/Hooks';
import HookForm from '../components/formSection/HookForm';

const Home = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">React Functional Component</h1>
      <Started />
      <Comment />
      <Hooks />
      <HookForm />
    </Layout>
  );
};

export default Home;
