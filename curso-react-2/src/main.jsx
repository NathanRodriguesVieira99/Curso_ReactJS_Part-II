import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import ContactsDetails from './pages/ContactsDetails/ContactsDetails.jsx';

// 1 configuração react-router
import {
  createBrowserRouter, RouterProvider, Navigate
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // 3 pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'contacts',
        element: <Contacts />,

      },
      // 5 nested routes - identificador unico / dynamic routes
      {
        path: '/contacts/:id',
        element: <ContactsDetails />
      },
      // 7 navigate para páginas não existentes
      {
        path: 'oldcontacts',
        element: <Navigate to='/contacts' />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
