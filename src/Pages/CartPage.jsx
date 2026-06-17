import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate();
  // cart item store 
  const [cartItems, setCartItems] = useState([]);

  // page open and show data
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // item remove function
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  // total price 
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      
      {/* page name and prev page open button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>🛒 Shopping Cart</h2>
        <button onClick={() => navigate('/product')} style={{ padding: '10px 20px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          ⬅️ Back to Shop
        </button>
      </div>

      {/* cart item availabale to show otherwise msg show your cart is emty */}
      {cartItems.length > 0 ? (
        <div>
          {/* cart grid 2 box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3>{item.name}</h3>
                  <p style={{ color: '#28a745', fontWeight: 'bold' }}>Price: ₹{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ padding: '8px 15px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          {/* total bill box*/}
          <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'right' }}>
            <h3>Total Amount: <span style={{ color: '#28a745' }}>₹{totalPrice}</span></h3>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '18px', marginTop: '50px' }}>Your Cart Is Emty!</p>
      )}
    </div>
  );
};

export default CartPage;
