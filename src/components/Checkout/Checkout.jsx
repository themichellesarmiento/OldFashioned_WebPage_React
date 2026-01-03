import { useContext, useActionState } from "react";
import classes from '../Cart/Cart.module.css'
import CartContext from '../../store/CartContext.jsx';
import UserActionContext from '../../store/UserActionContext.jsx';
import { useHttp } from "../../hooks/useHTTP.js";
import Input from '../UI/Input.jsx';
import Button from "../UI/Button.jsx";
import Modal from "../UI/Modal.jsx";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userActionCtx = useContext(UserActionContext);

  const { data, error, sendRequest, clearData } = useHttp(
    'http://localhost:3000/orders',
    requestConfig
  );

  const totalAmount = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleClose = () => userActionCtx.hideCheckout();

  const handleOrderFinish = () => {
    userActionCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let actions = (
    <>
      <Button type="button" onClick={handleClose}>
        Close
      </Button>
      <Button className={classes.checkout_btn} >Submit Order</Button>
    </>
  )

  const checkoutOrder = async (prevState, fd) => {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  const [formState, formAction, isProcessing] = useActionState(checkoutOrder, null);

  if (isProcessing) {
    actions = <p className='center'>Processing your order...</p>
  }

  if (data && !error) {
    return (
      <Modal
        open={userActionCtx.page === 'checkout'}
        onClose={handleOrderFinish}
      >
        <h2>Thank you for your purchase!</h2>
        <p>Your order is currently being processed.</p>
        <p>
          We will send an email with the order confirmation within the next
          few minutes.
        </p>
        <p className='modal_buttons'>
          <Button onClick={handleOrderFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userActionCtx.page === 'checkout'} onClose={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {`${totalAmount} SEK`}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="input_controls">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <p className="center error">{error}</p>}

        <p className="modal_buttons">
          {actions}
        </p>
      </form>
    </Modal>

  )
}

export default Checkout;