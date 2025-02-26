import Comment from './components/Comment';
import Layout from './components/Layout';
import Started from './components/Started';

const App = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">React Functional Component</h1>
      <Started />
      <Comment />
    </Layout>
  );
};

export default App;
