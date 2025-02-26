import React from 'react';

const Started = () => {
  return (
    <section className="mt-3">
      <div className="flex justify-between items-center border-b border-gray-200">
        <h2 className="text-xl font-bold">This is react started</h2>
        <p className="font-bold">{new Date().toLocaleTimeString()}</p>
      </div>

      <div className="mt-3">
        <label className="font-medium mr-2">Input Example</label>
        <input className="border-2 border-gray-200 p-2 rounded-md" />
      </div>
    </section>
  );
};

export default Started;
