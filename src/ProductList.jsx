import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200", cost: 15 },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=200", cost: 12 },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=200", cost: 18 },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=200", cost: 14 },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200", cost: 10 },
        { name: "English Ivy", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=200", cost: 16 }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=200", cost: 20 },
        { name: "Mint", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=200", cost: 8 },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=200", cost: 12 },
        { name: "Basil", image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=200", cost: 9 },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1508781917926-24185b4c99b8?q=80&w=200", cost: 22 },
        { name: "Thyme", image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=200", cost: 11 }
      ]
    },
    {
      category: "Low Maintenance",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643c2a9a9361?q=80&w=200", cost: 25 },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200", cost: 13 },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=200", cost: 30 },
        { name: "Succulent Mix", image: "https://images.unsplash.com/photo-1520302638475-10c52e325574?q=80&w=200", cost: 15 },
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=200", cost: 14 },
        { name: "Chinese Evergreen", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200", cost: 19 }
      ]
    }
  ];
  return (
    <div>
      <nav className="navbar">
        <div><span onClick={() => window.location.reload()}>Paradise Nursery</span> | <span onClick={() => setShowCart(false)}>Plants</span></div>
        <div onClick={() => setShowCart(true)} style={{cursor:'pointer'}}>🛒 {totalCount}</div>
      </nav>
      {showCart ? ( <CartItem onContinueShopping={() => setShowCart(false)} /> ) : (
        <div className="product-listing">
          {plantsArray.map((cat, i) => (
            <div key={i}>
              <h2>{cat.category}</h2>
              <div className="plant-grid">
                {cat.plants.map((plant, idx) => {
                  const inCart = cartItems.some(item => item.name === plant.name);
                  return (
                    <div className="plant-card" key={idx}>
                      <img src={plant.image} alt={plant.name} className="plant-image" />
                      <h3>{plant.name}</h3><p>${plant.cost}</p>
                      <button disabled={inCart} onClick={() => dispatch(addItem(plant))}>{inCart ? "Added" : "Add to Cart"}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductList;
