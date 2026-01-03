import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/index.css'
import './styles/common.css'
import './styles/typography.css'
import Home from './Home.jsx'
import CommonLayout from './routes/CommonLayout.jsx'
import About from './components/Pages/About.jsx'
import Contact from './components/Pages/Contact.jsx'
import { CartContextProvider } from './store/CartContext.jsx'
import { UserActionContextProvider } from './store/UserActionContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact-us', element: <Contact /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserActionContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserActionContextProvider>
  </StrictMode>,
)
