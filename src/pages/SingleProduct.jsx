import React from 'react';

const SingleProduct = ({ match }) => {
  return (
    <div className="single-product">
      <h1>Product Details</h1>
      <p>This is the product details page for product ID: {match.params.id}</p>
    </div>
  );
};

export default SingleProduct;
