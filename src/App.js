import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'
import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened,setCartOpened] = React.useState(false);

  React.useEffect(()=> {

    axios.get('https://63ac43f234c46cd7ae7c7e36.mockapi.io/items').then (res=> {
      setItems(res.data)
    });
    axios.get('https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart').then (res=> {
      setCartItems(res.data)
    });
    axios.get('https://63ac43f234c46cd7ae7c7e36.mockapi.io/favorites').then (res=> {
      setFavorite(res.data)
    });
  },[])
  
  const onChangeSearchInput = ( event ) => {
    setSearchValue(event.target.value);
  }
  const onAddToCart = (obj) => {
    axios.post('https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart', obj);
    setCartItems(prev => [...prev,obj]);

  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item=>item.id !== id));
}

  const onAddToFavorite = (obj) => {
  axios.post('https://63ac43f234c46cd7ae7c7e36.mockapi.io/favorites', obj);
  setFavorite(prev => [...prev,obj]);

}
  
  return ( <div className="wrapper clear">
      <Header onClickCart={()=> setCartOpened(true)}></Header>
     {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}></Drawer>}
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
          <h1> {searchValue ? `Search for "${searchValue}"` : 'Sneakers'} </h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && 
             <img 
             onClick={()=> 
             setSearchValue('')}
              className="clear cu-p"
               src="/img/close.svg" 
               alt="Clear" />
            }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search" />  
          </div>
        </div>
          <div className="d-flex flex-wrap">
           {
           items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (<Card
            key={item.title}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
           />))
           }
          </div>
      </div>

    </div>
  ) 
}

export default App;
