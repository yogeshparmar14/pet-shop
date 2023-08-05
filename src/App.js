// App.js
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Signup from './Signup';
 import Login from './Login'
 import Dashboard from './Dashboard'
 import OurService from './OurService'
 import AddPets from './AddPets'
 import Protected from './Protected'
const router = createBrowserRouter([
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/service",
        element: <OurService/>,
      },
      {
        path: "/add-pets",
        element: <AddPets/>,
      },
  ]);

const App = () => {
  const token =localStorage.getItem('token');
  
  return (
    // <RouterProvider router={router} />
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <Protected token={token}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/service"
            element={
              <Protected token={token}>
                <OurService />
              </Protected>
            }
          />
           <Route
            path="/add-pets"
            element={
              <Protected token={token}>
                 <AddPets/>
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
  
  );
};

export default App;

//<Route
// path="/products"
// element={
//   <Protected isSignedIn={isSignedIn}>
//     <Products />
//   </Protected>
// }
// />
