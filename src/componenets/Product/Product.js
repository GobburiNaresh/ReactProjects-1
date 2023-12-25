import React, { useState } from 'react';

const Product = ({ onProductIdSubmit }) => {
    const [productData, setFormData] = useState({
        productId: '',
        productName: '',
        productPrice: '',
    });

    const submitHandler = (event) => {
        event.preventDefault();

        const { productId } = productData;
        localStorage.setItem(productId, JSON.stringify(productData));

        // Pass the productId to the parent component
        onProductIdSubmit(productId);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...productData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="productId">Product Id:</label>
            <input
                type="number"
                id="productId"
                name="productId"
                value={productData.productId}
                onChange={handleChange}
            />
            <label htmlFor="productName">Product Name:</label>
            <input
                type="text"
                id="productName"
                name="productName"
                value={productData.productName}
                onChange={handleChange}
            />
            <label htmlFor="productPrice">Product Price:</label>
            <input
                type="number"
                id="productPrice"
                name="productPrice"
                value={productData.productPrice}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Product;
