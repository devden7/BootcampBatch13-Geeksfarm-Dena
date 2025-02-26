/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const CommentList = ({ avatar, fullName, date, description }) => {
  return (
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
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
