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
  const [isLoading,setLoaded ] = React.useState(false);

  React.useEffect(()=> {
    async function fetchData () {
      setLoaded(true);
      const cartResponse = await  axios.get('https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart');
      const favoriteResponse = await  axios.get('https://63ac43f234c46cd7ae7c7e36.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://63ac43f234c46cd7ae7c7e36.mockapi.io/items');

      setLoaded(false);

      setCartItems(cartResponse.data)
      setFavorite(favoriteResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData ();
  },[])
  
  const onChangeSearchInput = ( event ) => {
    setSearchValue(event.target.value);
  }
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter(item=>Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev,obj]);
    }
  }


  const onRemoveItem = (id) => {
    axios.delete(`https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item=>item.id !== id));
}

const onAddToFavorite = async (obj) => {
   try{ if (favorites.find((favoriteObj) => favoriteObj.id === obj.id)) {
      axios.delete(`https://63ac43f234c46cd7ae7c7e36.mockapi.io/favorites/${obj.id}`);
      setFavorite((prev) => prev.filter(item=>item.id !== obj.id));
    } else {
       const {data} = await axios.post('https://63ac43f234c46cd7ae7c7e36.mockapi.io/favorites', obj);
      setFavorite((prev) => [...prev,data]);
    }
    } catch(error) {
      alert('Failed to add to favorite')
    } 
};

return ( <div className="wrapper clear">
    {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}></Drawer>}
     <Header onClickCart={()=> setCartOpened(true)}></Header>
     <Route path="/favorites" exact>
        <Favorites items={favorites}
         onAddToFavorite={onAddToFavorite} />
      </Route>
      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>

        
    </div>
  ) 
}

export default App;