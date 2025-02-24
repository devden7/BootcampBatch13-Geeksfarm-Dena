import { Component } from 'react';
import Navbar from './components/Navbar';
import Comment from './components/Comment';
import Counting from './components/ButtonClick';

class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <Navbar />
        <h1>This is react</h1>
        <Counting />
        <Comment />
      </div>
    );
  }
}

export default App;
