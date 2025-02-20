import Navbar from './components/Navbar';

const App = () => {
  const message = 'Hi There!';
  const name = 'Dena Sudarajat';
  const role = 'Junior Developer';
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <h1>This is React</h1>
      <p>{message}</p>
      <p>My name is {name}</p>
      <p>My role is a {role}</p>
      <p>{new Date().toLocaleTimeString()}</p>
      <label className="font-medium">Input Example</label>
      <input className="border-2 border-gray-200 p-2 rounded-md" />
    </div>
  );
};

export default App;
