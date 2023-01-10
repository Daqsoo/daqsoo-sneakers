function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="background-overlay" onClick={onClose} />
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
        Корзина <img onClick={onClose} className="cu-p" src="/img/close.svg" alt="Close" />
        </h2>

        {
          items.length > 0 ? 
          <div>
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
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>
        </div>
        :

        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width={120} height={120} src="img/empty-cart.png" alt="Empty Cart" />
        <h2>Cart is empty</h2>
        <p className="opacity-6">Add at least 1 product to make order.</p>
        <button onClick={onClose}  className="greenButton">
        <img src="img/arrow.svg" alt="Arrow" /> Go Back</button>
      </div>

        }
       
      </div>
    </div>
  );
}

export default Drawer;