import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  return (
    <div style={{ padding: '25px' }}>
      <h2>Total Cart Amount: ${totalAmount}</h2>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index} style={{ display: 'flex', margin: '15px 0', borderBottom: '1px solid #ccc' }}>
          <img src={item.image} alt={item.name} style={{ width: '80px', marginRight: '20px' }} />
          <div>
            <h4>{item.name}</h4><p>Price: ${item.cost}</p><p>Subtotal: ${item.cost * item.quantity}</p>
            <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
            <button onClick={() => dispatch(removeItem(item.name))} style={{ marginLeft: '15px', color: 'red' }}>Delete</button>
          </div>
        </div>
      ))}
      <div style={{ marginTop: '20px' }}>
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <button onClick={() => alert('Coming Soon')} style={{ marginLeft: '20px' }}>Checkout</button>
      </div>
    </div>
  );
}
export default CartItem;
