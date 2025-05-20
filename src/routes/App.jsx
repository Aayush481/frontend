// filepath: c:\Users\aayus\OneDrive\Desktop\paste app\paste App\src\App.jsx
import React, { useState } from 'react';

import './App.css';
import NavBar from '../pages/navBar';
import ViewPaste from './viewPaste';
import ErrorPage from './ErrorPage';

import Create from '../pages/Create';



import Input from '../pages/Input';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/BuiltIn';




const router = createBrowserRouter([
{
  path:"/",
  
  elemnt:
  <div   >
   <NavBar/>
   <Home/>
    </div>
  },
  {
    path:"/input",
    element:<div >
   <NavBar/>
   <Input/>
    </div>
  },
  {
    path:"/pastes/:id",
    element:<div >
   <NavBar/>
   <ViewPaste/>
    </div>
  },
  {
    path:"/login",
    element:<div >
   <NavBar/>
   <Login/>
    </div>
  },
  {
    path:"/signup",
    element:<div >
   <NavBar/>
   <SignUp/>
    </div>
  }
  ,
  {
    path:"/create",
    element:<div >
   <NavBar/>
   <Create/>
    </div>
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;