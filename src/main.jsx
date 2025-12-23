import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/index.css'
import './styles/common.css'
import './styles/typography.css'
import App from './App.jsx'
import CommonLayout from './routes/CommonLayout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/about', element: <About /> },
      { path: '/contact-us', element: <Contact /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
