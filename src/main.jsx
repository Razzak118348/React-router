import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contuct/Contact";
import Users from "./Component/Users/Users";
import UserDetails from "./Component/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',//link path 
        element: <Contact></Contact>//kun component e jabe 
      },
      {
        path:'/users',//link path 
        // load data from url 
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        // /user/: userId ,, here userId like a variable
        path:"/user/:userId",//link path 
        element:<UserDetails></UserDetails>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>
);
