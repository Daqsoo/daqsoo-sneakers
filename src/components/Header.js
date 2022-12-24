function Header () {
    return(
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
    )
}
export default Header;