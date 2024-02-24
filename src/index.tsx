import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Profile from './pages/Profile';
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import ProductsPage from './pages/ProductsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/product/*",
    element: <ProductPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/cart",
    element: <ShoppingCartPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/profile",
    element: <Profile/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/sign-in",
    element: <AuthorizationPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/sign-up",
    element: <RegistrationPage  />,
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
