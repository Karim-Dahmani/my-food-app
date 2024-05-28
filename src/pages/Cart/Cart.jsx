import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} MAD</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} MAD</p>
                  <p onClick={()=>{removeFromCart(item._id)}} className='cross'>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
        <div className='cart-bottom'>
          <div className='cart-total'>
            <h2>Cart Totals</h2>
            <div>                
              <div className='cart-total-details'>
                <p>Total</p>
                <p>{getTotalCartAmount()} MAD</p>
              </div>
            </div>
          </div>
      
        </div>
    </div>
  )
}

export default Cart
