function App() {
  return ( <div className="wrapper clear">
    <div className="cart-bag">
      <div className="cart-shadow">
        <h2 className="mb-30">Cart  <img className="cart-delete" src="img/close.svg" alt="Remove" /></h2>
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


    <header className="d-flex justify-between">
      <div className="d-flex align-center">
        <img  width = {40} height = {40} src="/img/daqsoo_white.png" />
        <div className="headerLogo">
          <h3 className="m-0 ">Daqsoo Sneakers</h3>
          <p className="opacity-5">The best sneak shop</p>
        </div>
      </div>
      <ul className="d-flex justify-between align-center">
        <li className="mr-30">
          <img width = {18} height = {18} src="/img/cart.svg"/>
          <span className="ml-10"> 250$ </span>
        </li>
        <li>
        <img width = {18} height = {18} src="/img/head.svg"/>
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Sneakers</h1>
        <div className="searchBlock d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search" />  
        </div>
      </div>
      <div className="d-flex">
        <div className="card">
          <div className="favorite">
              <img src="/img/unlike.png" alt="Unliked"/>
          </div>
          <img width={133} height={112} src="/img/sneakers/1.jpg " alt="" />
          <h5>Nike Blazer Mid Suede Green</h5>
            <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Cost:</span>
                    <b>300 $</b>
                  </div>
                  <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
                </div>
          </div>
        <div className="card">
        <img width={133} height={112} src="/img/sneakers/2.jpg " alt="" />
        <h5 className="mb-40">Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>400 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
        <div className="card">
        <img width={133} height={112} src="/img/sneakers/3.jpg " alt="" />
        <h5>Nike Blazer Mid Suede White</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>300 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
        <div className="card">
        <img width={133} height={112} src="/img/sneakers/4.jpg " alt="" />
        <h5>Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>250 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
      </div>

    </div>
  </div>
  ) 
}

export default App;
