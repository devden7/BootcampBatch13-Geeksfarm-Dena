import Hooks from './components/hookSection/Hooks';
import Comment from './components/commentSection/Comment';
import Layout from './components/layout/Layout';
import Started from './components/startedSection/Started';

const App = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">React Functional Component</h1>
      <Started />
      <Comment />
      <Hooks />
    </Layout>
  );
};

export default App;
