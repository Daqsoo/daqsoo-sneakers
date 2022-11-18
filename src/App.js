function App() {
  return <div className="wrapper clear">
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
      <h1 className="mb-40">Sneakers</h1>
      <div className="d-flex">
      <div className="card">
        <img width={133} height={112} src="/img/1.jpg " alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>12000 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
        <div className="card">
        <img width={133} height={112} src="/img/1.jpg " alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>12000 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
        <div className="card">
        <img width={133} height={112} src="/img/1.jpg " alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>12000 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
        <div className="card">
        <img width={133} height={112} src="/img/1.jpg " alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost:</span>
                <b>12000 $</b>
                </div>
                <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
            </div>
        </div>
      </div>

    </div>
  </div>
}

export default App;
