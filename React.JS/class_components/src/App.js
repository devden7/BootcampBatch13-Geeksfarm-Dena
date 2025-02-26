import { Component } from 'react';
import Comment from './components/Comment';
import FetchApi from './components/FetchApi';
import Layout from './components/Layout';
import Started from './components/Started';
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
