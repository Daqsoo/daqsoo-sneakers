import Card from '../components/Card'
import React from 'react';

function Home ({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading}) {
        const renderItems = () => {

            const filtredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

            return(isLoading ? [...Array(8)] : filtredItems)
            .map(item => (<Card
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}
            />));
        }
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1> {searchValue ? `Search for "${searchValue}"` : 'Sneakers'} </h1>
            <div className="searchBlock d-flex">
                <img src="img/search.svg" alt="Search" />
                {searchValue && 
                <img 
                onClick={()=> 
                setSearchValue('')}
                    className="clear cu-p"
                    src="img/close.svg" 
                    alt="Clear" />
                }
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search" />  
            </div>
        </div>
            <div className="d-flex flex-wrap">
            {renderItems()}
        </div>
    </div>
    )
}

export default Home;