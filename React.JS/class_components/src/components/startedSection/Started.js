import React, { Component } from 'react';
import Counting from './ButtonClick';
import Clock from '../Clock';

class Started extends Component {
  render() {
    return (
      <section className="mt-3">
        <div className="flex justify-between items-center border-b border-gray-200">
          <h2 className="text-xl font-bold">This is react started</h2>
          <Clock />
        </div>
        <Counting />
      </section>
    );
  }
}
export default Started;
