function Drawer (props) {
  return (
            <div className="cart-bag">
        <div className="cart-shadow ">
        <h2 className="mb-30 d-flex justify-between">Cart  <img onClick={props.onClose} className="cu-p" src="img/close.svg" alt="Close" /></h2>
        <div className="cartItem d-flex align-center mb-20">
            <div className="mr-30">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" /> 
              <p className="mb-5">Nike Blazer Mid Suede Green</p>
              <b>300$</b>
            </div>
            <img className="cart-delete" src="img/close.svg" alt="Remove" />
        </div>
        <div className="cartItem d-flex align-center mb-20">
            <div className="mr-30">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" /> 
              <p className="mb-5">Nike Blazer Mid Suede Green</p>
              <b>300$</b>
            </div>
            <img className="cart-delete" src="img/close.svg" alt="Remove" />
        </div>
          <div className="cartItem d-flex align-center mb-20">
              <div className="mr-30">
                <img width={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers" /> 
                <p className="mb-5">Nike Air Max 270</p>
                <b>400$</b>
              </div>
            <img className="cart-delete" src="img/close.svg" alt="Remove" />
          </div>
        
            <div className="items">
              <ul className="cartTotalBlock">
                <li>
                  <p>Total:</p>
                  <div></div>
                  <b>1000 $</b>
                </li>
                <li>
                  <p>Estimated Import Fees Deposit</p>
                  <div></div>
                  <b>300 $</b>
                </li>
              </ul>
              <button>Checkout</button>
            </div>
            </div>
      </div>
    )
}
export default Drawer;