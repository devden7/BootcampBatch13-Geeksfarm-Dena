import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../store/CounterSlice';

const AdjustNumber = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center flex-col gap-2 h-96">
      <p className="text-xl">
        You Number{' '}
        <span className="text-3xl text-blue-700 font-bold">{counter}</span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-700 py-1 px-3 text-white cursor-pointer hover:bg-blue-800 duration-300 rounded-full"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="border-blue-700 border-2 py-1 px-3 cursor-pointer hover:bg-gray-200 duration-300 rounded-full"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-blue-700 py-1 px-3 text-white cursor-pointer hover:bg-blue-800 duration-300 rounded-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default AdjustNumber;
