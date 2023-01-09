import Home from './pages/Home'
import Favorites from './pages/Favorites'

import Drawer from './components/Drawer'
import Header from './components/Header'
import React from 'react';
import axios from 'axios';
import { Route   } from 'react-router-dom'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);
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
    {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}></Drawer>}
     <Header onClickCart={()=> setCartOpened(true)}></Header>
     <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

        
    </div>
  ) 
}

export default App;
