import Comment from './components/Comment';
import Navbar from './components/Navbar';
import { faker } from '@faker-js/faker';

const App = () => {
  const message = 'Hi There!';
  const name = 'Dena Sudarajat';
  const role = 'Junior Developer';
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const data = [
    {
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      date: new Date(faker.date.anytime()).toLocaleDateString('en-US', options),
      description: faker.food.description(),
    },
    {
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      date: new Date(faker.date.anytime()).toLocaleDateString(),
      description: faker.food.description(),
    },
    {
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      date: new Date(faker.date.anytime()).toLocaleDateString(),
      description: faker.food.description(),
    },
    {
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      date: new Date(faker.date.anytime()).toLocaleDateString(),
      description: faker.food.description(),
    },
    {
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      date: new Date(faker.date.anytime()).toLocaleDateString(),
      description: faker.food.description(),
    },
  ];
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
      <div class="ui comments pb-10">
        <h3 className="ui dividing header">Comments</h3>
        <div className="flex flex-col gap-5">
          {data.map((value) => (
            <div key={value.name}>
              <Comment
                avatar={value.avatar}
                fullName={value.fullName}
                date={value.date}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
