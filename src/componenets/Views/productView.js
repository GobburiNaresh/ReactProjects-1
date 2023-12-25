import React, { useEffect, useState } from 'react';

const View = ({ productId }) => {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const storedProductData = localStorage.getItem(productId);
    console.log(storedProductData);
    if (storedProductData) {
      const parsedProductData = JSON.parse(storedProductData);
      setProductData(parsedProductData);
    }
  }, [productId]);

  return (
    <div>
      <h2>Product Details</h2>
      {productData ? (
        <div>
          <p>
            Product Id: {productData.productId}
            <br />
            Product Name: {productData.productName}
            <br />
            Product Price: {productData.productPrice}
          </p>
        </div>
      ) : (
        <p>No product data available.</p>
      )}
    </div>
  );
};

export default View;
