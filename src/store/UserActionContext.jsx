import { createContext, useState } from "react";

const UserActionContext = createContext({
  page: '',
  showCart: () => { },
  hideCart: () => { },
  showCheckout: () => { },
  hideCheckout: () => { },
})


export const UserActionContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState('')

  const showCart = () => {
    setUserProgress('cart');
  }
  const hideCart = () => {
    setUserProgress('');
  }

  const showCheckout = () => {
    setUserProgress('checkout');
  }

  const hideCheckout = () => {
    setUserProgress('');
  }

  const userActionCtx = {
    page: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  }


  return (
    <UserActionContext.Provider value={userActionCtx}>
      {children}
    </UserActionContext.Provider>
  );

}
export default UserActionContext;