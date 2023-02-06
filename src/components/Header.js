import { Link } from 'react-router-dom'
import React from 'react';
import AppContext from '../context'

function Header (props) {
  const {cartItems} = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum,obj) => obj.price + sum, 0);
    return(
        <header className="d-flex justify-between">
       <Link to='/'> <div className="d-flex align-center">
          <img  width = {40} height = {40} src="img/daqsoo_white.png" alt="Logo" />
          <div className="headerLogo">
            <h3 className="m-0 ">Daqsoo Sneakers</h3>
            <p className="opacity-5">The best sneak shop</p>
          </div>
        </div></Link>
        <ul className="d-flex justify-between align-center">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img  width = {18} height = {18} src="img/cart.svg" alt="Cart"/>
            <span className="cartHeaderPrice ml-10 fw-bold ">{totalPrice} $</span>
          </li>
          <li className='mr-30'>
          <Link to='favorites'><img width = {18} height = {18} src="img/heart.svg" alt="Favorite"/></Link>
          </li>
          <li>
          <Link to='profile'><img width = {18} height = {18} src="img/head.svg" alt="User"/></Link>
          </li>
        </ul>
      </header>
    )
}
export default Header;