import Modal from "../UI/Modal"
import Button from "../UI/Button"
import classes from './Cart.module.css'
import { useContext } from "react"
import CartContext from "../../store/CartContext"
import UserActionContext from "../../store/UserActionContext"
import CartItem from "./CartItem"

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserActionContext);

  const totalPrice = cartCtx.items.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => userCtx.hideCart();

  const handleGoToCheckout = () => userCtx.showCheckout();

  return (
    <Modal className={classes.cart} open={userCtx.page === 'cart'}
      onClose={userCtx.page === 'cart' ? handleCloseCart : null}>
      <h2>Your order</h2>
      <ul>
        {cartCtx.items.map(item => (
          <CartItem
            key={item.id}
            item={item.name}
            quantity={item.quantity}
            price={item.price}
            onAddItem={() => cartCtx.addItem(item)}
            onDecreaseItem={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className={classes.total_price}>{`Total Amount: ${totalPrice} SEK`}</p>
      <p className="modal_buttons">
        <Button onClick={handleCloseCart}>Close</Button>
        {cartCtx.items.length > 0 && (
          <Button className={classes.checkout_btn} onClick={handleGoToCheckout}>Proceed to Checkout</Button>
        )}
      </p>
    </Modal>
  )
}

export default Cart;