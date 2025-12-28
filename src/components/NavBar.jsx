import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import Button from './UI/Button';

const NavBar = () => {
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
         <li>
         <Button>Cart</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;