/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';

class CommentList extends Component {
  render() {
    const { avatar, fullName, date, description, likes, index, likeHandler } =
      this.props;
    return (
      <>
        <div className="comment flex gap-2">
          <div>
            <a className="avatar h-10 w-10 overflow-hidden object-cover rounded-full">
              <img src={avatar} alt={avatar} />
            </a>
          </div>
          <div className="content">
            <a className="author">{fullName}</a>
            <div className="metadata">
              <span className="date">{date}</span>
            </div>
            <div className="text">{description}</div>
            <div className="actions flex gap-2 items-center">
              <a className="reply">Reply</a>
              <div>
                <p>{likes}</p>
              </div>
              <div>
                <button
                  onClick={() => likeHandler(index)}
                  className="bg-blue-700 py-1 px-3 text-white cursor-pointer hover:bg-blue-800 duration-300 rounded-full"
                >
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CommentList;
