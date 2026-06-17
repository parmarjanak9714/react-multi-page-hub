import React from 'react';
import { useNavigate } from 'react-router-dom';

const initialProducts = [
  { id: 101, name: "Samsung Galaxy S24", price: 75000 },
  { id: 102, name: "Apple iPhone 15", price: 80000 },
  { id: 103, name: "Sony Headphones WH-1000XM5", price: 30000 },
  { id: 104, name: "Apple iPad Air", price: 60000 },
  { id: 105, name: "Dell Inspiron Laptop", price: 55000 },
  { id: 106, name: "Boat Smartwatch Wave", price: 25000 },
  { id: 107, name: "JBL Bluetooth Speaker", price: 5000 },
  { id: 108, name: "Logitech Wireless Mouse", price: 1500 },
  { id: 109, name: "HP Wireless Keyboard", price: 2000 },
  { id: 110, name: "Seagate 1TB External HDD", price: 4500 }
];

const ProductsPage = () => {
  const navigate  = useNavigate();
  
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.some(item => item.id === product.id);

  
    if (isAlreadyInCart) {
      const updatedCart = existingCart.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.name} Removed from cart!`);
      window.location.reload(); 
      return;
    }

  
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} Add to cart!`);
    window.location.reload();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>🛍️ Products Shop</h2>
        <button onClick={() => navigate('/cart')} 
        style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Go to Cart 🛒
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        {initialProducts.map((product) => {
          
          const isInLocalStorage = (JSON.parse(localStorage.getItem("cart")) || []).some(item => item.id === product.id);

          return (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <h3>{product.name}</h3>
              <p style={{ color: '#28a745', fontWeight: 'bold' }}>Price: ₹{product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                style={{ 
                  padding: '8px 15px', 
                  background: isInLocalStorage ? '#dc3545' : '#28a745', 
                  color: '#fff', 
                  border: 'none',
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                
                {isInLocalStorage ? 'Remove' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
