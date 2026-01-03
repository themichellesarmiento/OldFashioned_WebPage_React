import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import NavBar from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";


const CommonLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
      <Cart />
      <Checkout />
    </>
  )
}

export default CommonLayout;