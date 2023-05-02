import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import HomePage from './Components/Home/HomePage.jsx';
import UserProvider from './Components/UserProvider/UserProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Recipes from './Components/Recipes/Recipes.jsx';
import NotFount from './Components/404/NotFount.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children: [
      {
        path: "/",
        element: <PrivateRoute><HomePage></HomePage></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/recipes/:id",
        element: <Recipes></Recipes>,
        loader: ({params})=>fetch(`https://assignment-10-server-seven-ashy.vercel.app/${params.id}`)
      },
      {
        path: '/*',
        element: <NotFount></NotFount>
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider > 
  <RouterProvider  router={router} />
  
  </UserProvider>
  </React.StrictMode>,
)
