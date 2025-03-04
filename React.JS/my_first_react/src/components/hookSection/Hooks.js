import { useState } from 'react';

const Hooks = () => {
  const [color, setColor] = useState('Red');
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'Red',
  });

  const updateColor = (color) => {
    setCar((previousState) => {
      return { ...previousState, color };
    });
  };
  return (
    <section className="mt-3">
      <h2 className="text-xl font-bold border-b border-gray-200">
        React Hooks
      </h2>
      <h3 className="text-xl font-medium">
        My favorite color is <span style={{ color }}>{color}!</span>
      </h3>
      <div className="flex gap-3 mt-3 items-center">
        <p>Set favorit Color :</p>
        <button
          type="button"
          onClick={() => setColor('Blue')}
          className="border-2 border-blue-700 px-2 py-1 rounded-md"
        >
          Blue
        </button>
        <button
          type="button"
          onClick={() => setColor('Red')}
          className="border-2 border-red-700 px-2 py-1 rounded-md"
        >
          Red
        </button>
        <button
          type="button"
          onClick={() => setColor('Pink')}
          className="border-2 border-pink-300 px-2 py-1 rounded-md"
        >
          Pink
        </button>
        <button
          type="button"
          onClick={() => setColor('Green')}
          className="border-2 border-green-700 px-2 py-1 rounded-md"
        >
          Green
        </button>
      </div>

      <h3 className="text-xl font-medium">My car is {car.brand}</h3>
      <p className="text-gray-500">
        It is a{' '}
        <span style={{ color: car.color }} className="text-lg font-semiBold">
          {car.color}
        </span>{' '}
        {car.model} from {car.year}
      </p>
      <div className="flex gap-3 items-center mt-3">
        <p>Set Car Color : </p>
        <button
          type="button"
          onClick={() => updateColor('Blue')}
          className="border-2 border-blue-700 px-2 py-1 rounded-md"
        >
          Blue
        </button>
        <button
          type="button"
          onClick={() => updateColor('Red')}
          className="border-2 border-red-700 px-2 py-1 rounded-md"
        >
          Red
        </button>
      </div>
    </section>
  );
};

export default Hooks;
