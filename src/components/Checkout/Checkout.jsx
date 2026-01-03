import { useContext } from "react";
import classes from '../Cart/Cart.module.css'
import CartContext from '../../store/CartContext.jsx';
import UserActionContext from '../../store/UserActionContext.jsx';
import Input from '../UI/Input.jsx';
import Button from "../UI/Button.jsx";
import Modal from "../UI/Modal.jsx";


const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userActionCtx = useContext(UserActionContext);

  const totalAmount = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleClose = () => userActionCtx.hideCheckout();

  return (
    <Modal open={userActionCtx.page === 'checkout'} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {`${totalAmount} SEK`}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="input_controls">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal_buttons">
          <Button type="button" onClick={handleClose}>
            Close
          </Button>
          <Button className={classes.checkout_btn} >Submit Order</Button>
        </p>
      </form>
    </Modal>

  )
}

export default Checkout;