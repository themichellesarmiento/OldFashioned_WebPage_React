import classes from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_contents}>
          <div className={classes.header_title}>Welcome to Old fashioned</div>
          <h2 className={classes.header_subtitle}>Home of the best apparel</h2>
          <Link to='/'><button className='headline_new_in_btn'>New In</button></Link>
        </div>
      </div>
    </header>
  )
}

export default Header;