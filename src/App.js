import Card from './components/Card'
import Drawer from './components/Drawer'
function App() {
  return ( <div className="wrapper clear">
     <Drawer></Drawer>


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
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
      </div>

    </div>
  ) 
}

export default App;
