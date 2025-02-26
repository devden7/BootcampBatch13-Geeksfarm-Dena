import { Component } from 'react';
import Navbar from './components/Navbar';
import Comment from './components/Comment';
import Counting from './components/ButtonClick';
import Clock from './components/Clock';
import FetchApi from './components/FetchApi';

class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <Navbar />
        <h1>This is react</h1>
        <Counting />
        <Clock />
        <Comment />
        <FetchApi />
      </div>
    );
  }
}

export default App;
