import { Component } from 'react';
import { faker } from '@faker-js/faker';
import CommentList from './CommentList';

const getData = (data = 5) => {
  return Array.from({ length: data }, () => {
    return {
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      date: new Date(faker.date.anytime()).toLocaleDateString(),
      description: faker.food.description(),
      likes: 0,
    };
  });
};

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      data: getData(),
    };
  }

  likeHandler = (index) => {
    this.setState((prev) => {
      const findData = [...prev.data];
      const takeData = findData[index];
      const updateNewData = { ...takeData, likes: takeData.likes + 1 };
      findData[index] = updateNewData;
      return { data: findData };
    });
  };
  render() {
    return (
      <div className="ui comments pb-10">
        <h3 className="ui dividing header">Comments</h3>
        <div className="flex flex-col gap-5">
          {this.state.data.map((value, i) => (
            <div key={i}>
              <CommentList
                avatar={value.avatar}
                fullName={value.fullName}
                date={value.date}
                description={value.description}
                likes={value.likes}
                index={i}
                likeHandler={this.likeHandler}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Comment;
