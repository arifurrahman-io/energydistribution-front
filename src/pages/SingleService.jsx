import React from 'react';

const SingleService = ({ match }) => {
  return (
    <div className="single-service">
      <h1>Service Details</h1>
      <p>This is the service details page for service ID: {match.params.id}</p>
    </div>
  );
};

export default SingleService;
