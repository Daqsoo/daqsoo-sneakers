import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'
import React from 'react'
const arr= [
  {title: 'Nike Blazer Mid Suede Green', price : 300, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Nike Blazer Mid Suede Green', price : 300,imageUrl: '/img/sneakers/1.jpg'},
]
function App() {
  const [cartOpened,setCartOpened] = React.useState(true)
  return ( <div className="wrapper clear">
      <Header onClickCart={()=> setCartOpened(true)}></Header>
     {cartOpened && <Drawer onClose={()=>setCartOpened(false)}></Drawer>}
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
          <h1>Sneakers</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />  
          </div>
        </div>
          <div className="d-flex">
           {
           arr.map(obj => (<Card
           title={obj.title}
           price={obj.price}
           imageUrl={obj.imageUrl}
           onFavorite={() => console.log('favorite')}
           onPlus={() => console.log('plus')}
           />))
           }
          </div>
      </div>

    </div>
  ) 
}

export default App;
