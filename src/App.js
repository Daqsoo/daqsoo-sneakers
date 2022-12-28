import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'
import React from 'react'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened,setCartOpened] = React.useState(false)

  React.useEffect(()=> {
    fetch('https://63ac43f234c46cd7ae7c7e36.mockapi.io/items')
    .then ((res)=> {
      return res.json();
    })
    .then((json)=>{
      setItems(json);

    })
  },[])
  
  const onAddToCart = (obj) => {
    setCartItems(prev => [...cartItems,obj]);

  }

  return ( <div className="wrapper clear">
      <Header onClickCart={()=> setCartOpened(true)}></Header>
     {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)}></Drawer>}
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
          <h1>Sneakers</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />  
          </div>
        </div>
          <div className="d-flex flex-wrap">
           {
           items.map(item => (<Card
           title={item.title}
           price={item.price}
           imageUrl={item.imageUrl}
           onFavorite={() => console.log('favorite')}
           onPlus={(obj) => onAddToCart(obj)}
           />))
           }
          </div>
      </div>

    </div>
  ) 
}

export default App;
