import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Movies from "./components/Movies";
import Signup from "./components/Signup";
import Users from "./components/Users";
import Login from './components/Login';

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", // page/component/resource
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/genres",
    element: <App><div>Genres here</div></App>,
  },
  {
    path: "/categories",
    element: <App><div>Movie Categories here</div></App>,
  },
  {
    path: "/rating",
    element: <App><div>Movie Ratings here</div></App>,
  },
  {
    path: "/faqs",
    element: <App><div>Faqs will come here</div></App>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
