import { faker } from '@faker-js/faker';
import CommentList from './CommentList';

const data = [
  {
    fullName: faker.person.fullName(),
    avatar: faker.image.avatar(),
    date: new Date(faker.date.anytime()).toLocaleDateString('en-US'),
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

const Comment = () => {
  return (
    <section className="mt-3">
      <div className="ui comments pb-10  !max-w-full">
        <h3 className="ui dividing header">Comments</h3>
        <div className="flex flex-col gap-5">
          {data.map((value, i) => (
            <div key={i}>
              <CommentList
                avatar={value.avatar}
                fullName={value.fullName}
                date={value.date}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comment;
