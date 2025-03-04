import React, { useEffect, useState } from 'react';

const getTime = () => {
  return new Date().toLocaleTimeString();
};
const SET_SECOND_TIME = 1000;

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, SET_SECOND_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      <p>Current time : </p>
      <p className="font-bold">{currentTime}</p>
    </div>
  );
};

export default Clock;
