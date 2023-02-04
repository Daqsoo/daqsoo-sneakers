import Info from "./Info";
import React from "react";

function Drawer({ onClose, items = [], onRemove }) {

  const  [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const onClickOrder = () => {
    setIsOrderComplete(true);
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
          <button onClick={onClickOrder} className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>
        </div>
        :
          <Info title="Cart is Empty" 
          description="Add at least 1 product to make order."
           image="img/empty-cart.png" />

        }
       
      </div>
    </div>
  );
}

export default Drawer;