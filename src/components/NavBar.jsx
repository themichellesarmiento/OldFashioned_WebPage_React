import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import icon from '../assets/icons/shopping_bag.png'

const NavBar = () => {
  const cartContext = useContext(CartContext)

  const totalAddedItems = cartContext.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0)

  return (
    <nav className={classes.menu}>
      <div className={classes.menu_mobile_trigger}></div>
      <ul className={classes.menu_items_wrapper}>
        <li className="active">
          <Link to='/'>
            <h4>Shop</h4>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <h4>About</h4>
          </Link>
        </li>
        <li>
          <Link to='/contact-us'>
            <h4>Contact</h4>
          </Link>
        </li>
        <li className={classes.cartItem}>
          <img src={icon}
            alt="Cart icon" className={classes.cart} />
          <span>({totalAddedItems})</span>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;