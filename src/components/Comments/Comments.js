// components/Comments/Comments.js
import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ taskId, comments, addComment }) => {
  const [text, setText] = useState('');

  const handleAddComment = () => {
    addComment(taskId, text);
    setText('');
  };

  return (
    <div className="comments">
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comments;
