import classes from './Cart.module.css'

const CartItem = ({ item, quantity, price, onAddItem, onDecreaseItem }) => {
  return (
    <li className={classes.cart_item}>
      <p>
        {item} - {quantity} x {price}
      </p>
      <p className={classes.button_actions}>
        <button onClick={onDecreaseItem}>-</button>
        <span>{quantity}</span>
        <button onClick={onAddItem}>+</button>
      </p>
    </li>
  )
}

export default CartItem;