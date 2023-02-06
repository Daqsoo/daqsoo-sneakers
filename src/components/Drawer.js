import Info from "./Info";
import React from "react";
import AppContext from "../context";
import axios from 'axios';

function Drawer({ onClose, items = [], onRemove }) {

  const  [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const { setCartItems,cartItems } = React.useContext(AppContext);
  const [isLoading,setIsLoading] = React.useState(false);

 const onClickOrder = () => {
    setIsLoading(true);
    setIsOrderComplete(true);
    
    cartItems.forEach(item => {
      axios.delete('https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart/' + item.id);
    });
    setCartItems([]);
    setIsLoading(false);
  }
  

  return (
    <div className="overlay">
      <div className="background-overlay" onClick={onClose} />
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
        Корзина <img onClick={onClose} className="cu-p" src="/img/close.svg" alt="Close" />
        </h2>

        {
          items.length > 0 ? 
          <div className="d-flex flex-column flex">
          <div className="items">
          {items.map((obj)=>(
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: `url(${obj.imageUrl})` }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}</b>
            </div>
            <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/close.svg" alt="Remove" />
          </div>
          
          ))}
           <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>
        </div>
        :
          <Info title={isOrderComplete ? "Order Completed" : "Cart is Empty" }
          description={isOrderComplete ? "As soon as your order is ready, it will be delivered" : "Add at least 1 product to make order."}
           image={isOrderComplete ? "img/order.jpg" : "img/empty-cart.png" }/>

        }
       
      </div>
    </div>
  );
}

export default Drawer;