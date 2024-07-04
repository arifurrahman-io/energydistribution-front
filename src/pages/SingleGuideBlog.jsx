import React from 'react';

const SingleGuideBlog = ({ match }) => {
  return (
    <div className="single-guide-blog">
      <h1>Guide/Blog Details</h1>
      <p>This is the guide/blog details page for guide/blog ID: {match.params.id}</p>
    </div>
  );
};

export default SingleGuideBlog;
