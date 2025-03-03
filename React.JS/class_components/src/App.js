import { Component } from 'react';
import Comment from './components/commentSection/Comment';
import FetchApi from './components/fetchApiSection/FetchApi';
import Layout from './components/layout/Layout';
import Started from './components/startedSection/Started';
import './index.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-2xl font-bold">React Class Component</h1>
        <Started />
        <Comment />
        <FetchApi />
      </Layout>
    );
  }
}

export default App;
