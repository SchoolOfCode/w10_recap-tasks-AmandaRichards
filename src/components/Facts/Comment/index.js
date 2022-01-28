import React from 'react';

export const Comment = ({username, comment}) => {
  return <div>
      <h1>{username}</h1>
      <p>{comment}</p>
  </div>;
};
