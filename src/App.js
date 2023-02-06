import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'

import Drawer from './components/Drawer'
import Header from './components/Header'
import React from 'react';
import axios from 'axios';
import { Route   } from 'react-router-dom';
import AppContext from './context';

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
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://63ac43f234c46cd7ae7c7e36.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('ERROR');
      console.error(error);
    }
  };


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


  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }

return ( 
  <AppContext.Provider value={{cartItems,favorites,items, isItemAdded, onAddToFavorite, setCartOpened, setCartItems,onRemoveItem}}>
    <div className="wrapper clear">

        {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}></Drawer>}

      <Header onClickCart={()=> setCartOpened(true)}></Header>

      <Route path="/favorites" exact>
          <Favorites/>
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

        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        
    </div>
  </AppContext.Provider>
  ) 
}

export default App;