import React, { useState } from 'react';
import Product from './components/Product/Product';
import View from './components/Views/productView';

function App() {
  const [currentProductId, setCurrentProductId] = useState('');

  const handleProductSelect = (productId) => {
    setCurrentProductId(productId);
  };

  return (
    <div>
      <Product onProductIdSubmit={handleProductSelect} />
      <View productId={currentProductId} />
    </div>
  );
}

export default App;
