import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import {persistor, store} from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from "./components/AuthProvider/AuthProvider";
import './fonts/ZonaPro-Bold.otf';
import "./fonts/ZonaPro-ExtraLight.otf";
import Signup from './pages/Authentication/Signup';
import Login from './pages/Authentication/Login';
import "./index.scss";
import UserDetails from './pages/User/UserDetails';
import ScrollToTop from './components/ScrollToTop';


const Layout = () =>{
  return(
    <div className="app">
      <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/products/:id",
        element:<Products />
      },
      {
        path: "/product/:id",
        element:<Product />
      },
      {
        path: "/register",
        element:<Signup />
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/user",
        element:<UserDetails />
      },

    ]
  },
])  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={"loading"} persistor={persistor}>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
